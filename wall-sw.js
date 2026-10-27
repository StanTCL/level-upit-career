/*
 * Level Up #RP wall: offline copies of the wall page, its code, the card pictures and the booth
 * music. Staff press "Save for offline" on the wall once with internet; after that the wall still
 * opens (and the music still plays) if the venue Wi-Fi drops. Live cards still need internet.
 *
 * Network first: with internet everything is fetched fresh as usual (so updates always arrive);
 * the saved copy is only used when the network fails. Only this site's own files and the theme
 * song are handled here; the card database's connections are left alone.
 */
const CACHE = 'level-up-wall-v1';
const MUSIC_HOSTS = ['od.lk'];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

function handled(url) {
  const u = new URL(url);
  return u.origin === self.location.origin || MUSIC_HOSTS.some((h) => u.hostname === h || u.hostname.endsWith('.' + h));
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || !handled(req.url) || req.url.endsWith('wall-sw.js')) return;
  e.respondWith(
    (async () => {
      try {
        return await fetch(req);
      } catch (err) {
        const cache = await caches.open(CACHE);
        const hit = (await cache.match(req, { ignoreSearch: req.mode === 'navigate' })) || (await cache.match(req.url, { ignoreSearch: true }));
        if (hit) return hit;
        throw err;
      }
    })(),
  );
});

self.addEventListener('message', (e) => {
  if (e.data?.type !== 'save') return;
  const urls = [...new Set(e.data.urls || [])];
  const port = e.ports[0];
  e.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      let done = 0;
      let saved = 0;
      for (const url of urls) {
        try {
          const same = new URL(url).origin === self.location.origin;
          const res = await fetch(new Request(url, same ? { cache: 'reload' } : { mode: 'no-cors' }));
          if (res.ok || res.type === 'opaque') {
            await cache.put(url, res);
            saved++;
          }
        } catch {
          /* missing files (e.g. card art not added yet) are skipped */
        }
        done++;
        port?.postMessage({ done, total: urls.length, saved });
      }
      port?.postMessage({ done, total: urls.length, saved, finished: true });
    })(),
  );
});
