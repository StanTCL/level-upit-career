# ./level_upIT career cards

The card website for the **CIP Spin & Throw Challenge** (School of Infocomm, Republic Polytechnic).

- **Card page:** https://stantcl.github.io/level-upit-career/
  The QR code at the booth opens a player's card here: tilt it, turn it over, save the picture,
  and add a nickname to join the wall. Players can also type their card code here later.
- **Participant wall:** https://stantcl.github.io/level-upit-career/wall.html
  Live cards from players who joined the wall. Open it on a screen at the booth.

## What's in here

This repository only holds the built website (published by GitHub Pages from `main`, root):

| Path | What it is |
| --- | --- |
| `index.html` | The card page |
| `wall.html` | The participant wall |
| `assets/` | The page code, styles and fonts |
| `cards/` | Card pictures (`01.webp` … `25.webp`, `back.webp`), added as cards are approved |

The game itself and its source code are kept separately. The finished card artwork is produced
and approved in the private `level-upit-career-cards` repository (folder `final/`); approved cards
are copied here as smaller phone-friendly pictures.

Card data (nicknames for the wall) is stored in Firebase Firestore; the security rules there
decide what can be read or written. Nothing personal beyond an optional nickname is collected.
