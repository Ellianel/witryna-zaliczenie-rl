# Praca w zespole
## Witryna ćwiczeniowa
**Grupa Runo Leśne**

- Michał Niekłań – PM / Lead 
- Radosław Młynarczyk -dev
- Daniel Borowski -dev
- Jakub Ciecierski -dev
- Jarosław Młodziejewski -dev

## Zasady pracy w repozytorium

Każde zadanie w projekcie jest tworzone jako osobne Issue. Do każdego Issue należy utworzyć osobną gałąź roboczą i osobny Pull Request.

### Typy zadań

W projekcie stosujemy następujące typy Issues:

- `feature` — nowe funkcje lub nowe sekcje strony,
- `bug` — błędy wymagające poprawy,
- `docs` — dokumentacja projektu,
- `chore` — zadania techniczne lub organizacyjne.

### Nazwy zadań

Tytuł Issue powinien krótko opisywać zadanie, np.:

- Website navigation
- Hero section
- Authors carousel
- Update README
- Fix menu links

Typ zadania określamy za pomocą etykiety, np. `typ: feature`, `typ: docs`.

### Nazwy gałęzi

Nazwy gałęzi zapisujemy małymi literami, bez spacji i bez polskich znaków.

Schemat:

```text
typ/numer-issue-krotki-opis
```

Przykłady:
- `feature/1-navigation`
- `feature/2-hero-section`
- `feature/3-carousel`
- `fix/4-menu-links`
- `docs/5-readme`
- `chore/6-templates`

### Nazwy Pull Requestów

Tytuł Pull Requesta powinien krótko opisywać wykonaną zmianę, np.:

- `Add navigation section`
- `Add hero section`
- `Add carousel section`
- `Update README`
- `Fix menu links`

W opisie Pull Requesta należy wpisać numer powiązanego Issue, np.:

```text
Closes #5
```

---

## 🛠️ Instrukcja obsługi GitHub CLI (gh)

Dla ułatwienia pracy zespołowej zachęcamy do korzystania z **GitHub CLI**. Poniżej ściąga z najważniejszych komend:

### 1. Zarządzanie zadaniami (Issues)
*   `gh issue list` – lista wszystkich zadań (co jest do zrobienia).
*   `gh issue view X` – szczegóły zadania nr X (np. kryteria akceptacji).
*   `gh issue status` – zadania przypisane do Ciebie.

### 2. Praca z gałęziami i Pull Requestami (PR)
*   `gh pr create` – tworzy nowy Pull Request (zapyta o tytuł i opis).
*   `gh pr list` – lista wszystkich otwartych PR-ów.
*   `gh pr checkout X` – pobiera gałąź PR nr X i przełącza Cię na nią lokalnie (idealne do sprawdzania kodu kolegów).

### 3. Code Review i Mergowanie (Zadania Leada/Reviewera)
*   `gh pr review --approve` – zatwierdza kod w aktualnym PR.
*   `gh pr merge` – scala PR do gałęzi `main` (automatycznie zamyka powiązane Issue).
