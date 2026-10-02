# doetdednssechetnogwel.nl

Doet de DNSSEC het nog wel? Wie zal het zeggen. No cap, de belangrijkste website van het internet.

## Belangrijk
Deze website is absoluut niet bedoeld om iets of iemand belachelijk te maken of slecht te zetten. Het is een uit de hand gelopen geintje die vooral ook grappig moet blijven. Zodra ook maar iets of iemand hier onprettige of negatieve gevoelens bij heeft gaat het direct offline.

## DNSSEC-check
Vul een domein in en druk op **Yusu?**. Weet je niet wat DNSSEC is? Klik op "Wat is DNSSEC?". **Als je kan.**

- 🚀 DNSSEC werkt? Raket de lucht in. We're so back.
- 🌙 Dark mode. Light mode is niet de vibe.
- 🗺️ Rechtsboven: naar het overzicht.
- 🔐 Rechtsboven: naar het beheer.

## Overzicht
### doetdednssechetnogwel.nl/overzicht: alle pagina's op één plek
Kwijt? Geen paniek. Hier staan alle URL's netjes op een rij. Understood the assignment.
- **🗺️ Overzicht-knop:** Rechtsboven op de hoofdpagina, Quotes en Klantparels. Op je telefoon alleen het icoontje, want ruimte is schaars. Bestie, je vindt hem wel.
- **← Terug:** Kom je via het overzicht? Dan brengt Terug je daar ook weer naartoe. Full circle moment.

## Quotes
### doetdednssechetnogwel.nl/quotes: de beste EXIT Toys quotes
- **Volgende quote:** Willekeurige quote, elke quote één keer per ronde. Ate.
- **Stemmen:** 🚀 als hij slayt, 📉 als hij mid is.
- **👑 Kroon:** Voor de hoogste score. Main character energy.
- **🏆 Scoreboard:** De top 5. Sommige quotes zitten in hun flop era.
- **Counter:** Hoeveel quotes er nu zijn.
- **✨ Nieuw:** Melding bij nieuwe quotes van de laatste 48 uur.
- **⚠️ Belangrijk:** Lees het even, fr.

**Zelf een quote insturen?** Via **📝 Quote toevoegen**. Een admin keurt hem goed of af. Hopen dat hij de vibe check haalt. 🤞

## Klantparels
### doetdednssechetnogwel.nl/klantparels: de beste uitspraken van klanten
It's giving onvergetelijk.
- **Toevoegen:** Quote, categorie (verplicht) en optioneel datum, product en foto, video of audio. Ook voicemails. Iconic.
- **Afspelen:** Niks speelt vanzelf af. Geen jumpscares in de open office.
- **Stemmen:** Eén ⭐ per persoon. Kies wijs.
- **🐐 GOAT:** De meeste stemmen. Literally him.
- **Filteren:** Op stemmen, datum, type, categorie en periode. Met teller.
- **Vertalen:** Vertaalknop bij anderstalige parels. Global rizz. 🌍
- **Vergroten:** Klik op foto of video. Detective mode: on. 🔍
- **Reageren:** Naam en reactie, that's it. Spill the tea. ☕

## Beheer
Log in op doetdednssechetnogwel.nl/admin met je GitHub Personal Access Token.

**💬 Quotes**
- Goedkeuren (komt automatisch in `quotes/quotes.md`) of afwijzen
- Afgekeurde quotes alsnog goedkeuren. Character development.
- Stemmen resetten

**💎 Klantparels**
- Bewerken of verwijderen, ook de media
- Gezichten blurren via Cloudinary, per parel aan/uit. Privacy is a slay.
- Reacties verwijderen
- Stemmen resetten

## Onder de motorkap
Nerd alert, maar we respect it. 🤓

| Pad | Wat |
|---|---|
| `index.html` | DNSSEC-check |
| `quotes/index.html` | Quotes-pagina |
| `quotes/quotes.md` | Alle quotes (de bron), gescheiden door `---` |
| `klantparels/index.html` | Klantparels-pagina |
| `overzicht/index.html` | Overzicht van alle URL's |
| `admin/index.html` | Beheer |
| `database.rules.json` | Regels Realtime Database (stemmen, ingestuurde quotes) |
| `firestore.rules` | Regels Firestore (klantparels, reacties) |
| `.github/workflows/deploy.yml` | Deploy naar GitHub Pages bij push naar `main` |

- **Data:** Firebase Realtime Database, Firestore en Cloudinary (media).
- **Config:** `klantparels/config.js` wordt bij deploy gemaakt uit GitHub Secrets. Lokaal: kopieer `config.example.js`.

Zie ook [Contributing.md](Contributing.md) en [security.md](security.md).
