# beveiligingsbeleid
Bij een website als deze, die zo cruciaal is als basisinfrastructuur voor EXIT is veiligheid prioriteit nummer 1. Hier hoort een uitgebreid beveiligingsbeleid door. Hiervoor wil ik graag een aantal dingen afspreken en verduidelijken. 

## Veiligheids-best-practices voor commits
Allereerst leidt ik je door een aantal punten die je altijd mee moet nemen in je commits; 
<br>
* Hard-code nooit secrets in je commits. Gebruik hiervoor altijd Github Secrets.
* Moet je toch een secret hardcoden, omdat het niet via Github Secrets kan, zorg dan dat je uitgebreide bescherming aanzet, denk hierbij aan URL protections zodat het alleen vanaf de juiste URL beschikbaar is
* Heb je een secret gehardcode die niet de bedoleing was? Volg de volgende stappen: Rotate de secret, purge de commit, en maak een nieuwe commit zonder de hardcoded secret

## Een veiligheidsissue melden:
Zie je een veiligheidsprobleem? Meld deze dan via de juiste kanalen. Maak geen mormale issue, maar maak een security issue. Weet je niet hoe dit werkt, stuur dan een direct bericht naar de beheerders. 
  
