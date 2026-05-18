# CLAUDE.md

## Werkwijze bij elke wijziging

Volg altijd deze stappen bij het doorvoeren van een wijziging:

### 1. Maak een backup branch

Voordat je iets wijzigt, maak je eerst een backup branch van de huidige staat:

```bash
git checkout -b backup/$(date +%Y%m%d-%H%M%S)-before-<korte-beschrijving>
git push origin backup/$(date +%Y%m%d-%H%M%S)-before-<korte-beschrijving>
git checkout main
```

### 2. Voer de wijziging door

Pas de bestanden aan zoals gevraagd.

### 3. Commit en push naar GitHub

Na de wijziging: stage, commit en push naar de `main` branch:

```bash
git add <gewijzigde bestanden>
git commit -m "<beschrijving van de wijziging>"
git push origin main
```

## Samenvatting

Bij elke taak:
1. **Backup branch** aanmaken (en pushen naar GitHub)
2. **Wijziging** doorvoeren
3. **Commit + push** naar `main`

Nooit een wijziging doorvoeren zonder eerst een backup branch te hebben gemaakt.
