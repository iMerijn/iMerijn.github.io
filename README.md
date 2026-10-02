# doetdednssechetnogwel.nl

Doet de DNSSEC het nog wel? Wie zal het zeggen. No cap, dit is de belangrijkste website van het internet.

## Belangrijk
Deze website is absoluut niet bedoeld om iets of iemand belachelijk te maken of slecht te zetten. Het is een uit de hand gelopen geintje die vooral ook grappig moet blijven. Zodra ook maar iets of iemand hier onprettige of negatieve gevoelens bij heeft gaat het direct offline.

## Test de DNSSEC meteen op doetdednssechetnogwel.nl
Vul een domein in, druk op **Yusu?** en je weet het meteen. Lowkey de snelste check ooit. Weet je niet wat DNSSEC is? Klik dan vooral op de "Wat is DNSSEC?" knop. **Als je kan.**

- 🚀 Doet de DNSSEC het? Dan gaat er een raket de lucht in. We're so back. 🚀
- 🌙 Dark mode, want het is altijd ergens nacht. Light mode is gewoon niet de vibe.
- 🔐 Rechtsboven zit de knop naar het beheer.

## Quotes
### Ga naar doetdednssechetnogwel.nl/quotes en bekijk de beste EXIT Toys quotes!
Welke functies zijn er?
- **Volgende quote:** Druk op de knop en krijg een willekeurige quote. 100% kans dat hij inspirerend, prachtig, leerzaam en wijs is! Je ziet elke quote precies één keer voordat de rij opnieuw geschud wordt. Geen herhalingen dus, hoe graag je dat ook zou willen. Ate and left no crumbs.
- **Stemmen:** Stem op de quotes! Welke vind jij het beste? Welke inspireert de meeste anderen? Stem een 🚀 voor de quotes die echt slayen. Is de quote mid? Stem een 📉
- **👑 Kroon:** De quote met de hoogste score krijgt een kroontje. Verdiend. Main character energy. 👑
- **🏆 Scoreboard:** Bekijk de top 5. Kijk welke quotes goed scoren, en welke er een stuk minder populair zijn. Sommige quotes zijn gewoon in hun flop era.
- **Quote-counter:** Onderin zie je hoeveel quotes er op dit moment in de collectie zitten.
- **✨ Nieuwe quotes:** Zijn er in de afgelopen 48 uur nieuwe quotes goedgekeurd? Dan krijg je dat bovenin meteen te horen. Zo mis je nooit meer de nieuwe lore.
- **⚠️ Belangrijk:** Onderin staat waarom deze site bestaat. Lees het even, fr.

### Dien je eigen quote in
Heb jij nog een goede quote die er echt bij moet komen te staan? Stuur hem in via de **📝 Quote toevoegen** knop onderaan het quote scherm. Eén van de admins beoordeelt dan je quote en bepaalt of hij erbij komt of niet. Kom regelmatig terug om te zien of jouw quote al goedgekeurd is! Fingers crossed dat hij de vibe check haalt. 🤞

## Klantparels
### De mooiste, gekste en onvergetelijkste uitspraken van klanten. Ga naar doetdednssechetnogwel.nl/klantparels
Wat kunnen onze klanten zeggen. Echt waar. It's giving onvergetelijk. Bekijk de hele collectie op de Klantparels pagina!
- **Quote toevoegen:** Heb jij een quote meegekregen die er écht bij moet? Voeg hem toe! Vul de quote in, kies een productcategorie (verplicht) en geef eventueel de datum, een productnaam en een foto, video of audiofragment mee. Ja, ook voicemails kunnen erbij. Iconic. De naam van de indiener wordt niet gevraagd, want die weten we al.
- **Afspelen:** Video's en audio spelen niet vanzelf af. Gebruik de play/pauzeknop. Je collega's zullen je dankbaar zijn. Geen jumpscares in de open office.
- **Stemmen:** Welke quote is de absolute ster? Stem op je favoriet met een ⭐. Maar kies wel verstandig, want je hebt er maar één.
- **🐐 GOAT:** De quote met de meeste stemmen krijgt de GOAT-kroon. Topklasse status. Literally him. Wordt elke week opnieuw beslist? Nee. Is hij daardoor minder speciaal? Ook nee.
- **Filteren:** Sorteer op stemmen, nieuwste of oudste. Filter op type (foto, video, audio of tekst), productcategorie (trampolines, speeltoestellen, zwembaden, skelters, sport, onderdelen, overig) of periode (deze week, deze maand of altijd). Combineer ze gerust. Het telt ook even hoeveel quotes er dan nog overblijven.
- **Vertalen:** Is een klantparel niet in het Nederlands? Dan verschijnt er een vertaalknop onder de quote. Want sommige parels verdienen het om door iedereen begrepen te worden. Global rizz. 🌍
- **Vergroten:** Klik op een foto of video om hem groter te bekijken. Video's spelen dan ook met geluid. Want soms wil je gewoon even goed kijken wat er nou precies op de achtergrond staat. Detective mode: on. 🔍
- **Reageren:** Onder elke quote kunnen mensen een reactie plaatsen. Naam is verplicht, meer hoef je niet in te vullen. De eerste drie reacties zijn meteen zichtbaar, daarna kun je er meer laden, en ook weer inklappen. Spill the tea. ☕

## Beheer
Ben je een admin? Main character moment. Log in via doetdednssechetnogwel.nl/admin met je GitHub Personal Access Token. Het beheer heeft twee tabbladen.

**💬 Quotes**
- Ingediende quotes goedkeuren of afwijzen. Goedgekeurde quotes worden automatisch aan `quotes/quotes.md` toegevoegd.
- Afgekeurde quotes terugzien en alsnog goedkeuren, voor als je er later toch om moest lachen. Character development.
- Alle stemmen op de Quotes-pagina in één keer resetten.

**💎 Klantparels**
- Klantparels bewerken (tekst, categorie, datum) of verwijderen.
- Foto, video of audio vervangen of verwijderen.
- Gezichten automatisch blurren: per klantparel aan/uit te zetten. Cloudinary detecteert gezichten en blurt ze automatisch. Werkt het best bij duidelijke frontale gezichten. Privacy is a slay.
- Reacties per klantparel bekijken en verwijderen.
- Alle stemmen op de Klantparels in één keer resetten.

## Hoe zit het in elkaar?
Voor wie toch onder de motorkap wil kijken. Nerd alert, maar we respect it. 🤓

| Pad | Wat |
|---|---|
| `index.html` | De DNSSEC-check |
| `quotes/index.html` | De Quotes-pagina |
| `quotes/quotes.md` | Alle quotes, gescheiden door `---`. Dit is de bron: wat hier staat, komt op de site |
| `klantparels/index.html` | De Klantparels-pagina |
| `admin/index.html` | Het beheer |
| `database.rules.json` | Beveiligingsregels voor de Firebase Realtime Database (stemmen en ingediende quotes) |
| `firestore.rules` | Beveiligingsregels voor Firestore (klantparels en reacties) |
| `.github/workflows/deploy.yml` | Deployt naar GitHub Pages bij elke push naar `main` |

- **Hosting:** GitHub Pages, op het domein uit `CNAME`.
- **Data:** stemmen en ingediende quotes staan in de Firebase Realtime Database. Klantparels en reacties staan in Firestore. Foto's, video's en audio staan op Cloudinary.
- **Config:** `klantparels/config.js` staat niet in git. Die wordt bij het deployen gegenereerd uit GitHub Secrets. Lokaal werken? Kopieer `klantparels/config.example.js` naar `config.js` en vul je eigen waarden in.

Zie ook [Contributing.md](Contributing.md) en [security.md](security.md).
