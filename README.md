# Portal Informacyjny - InfoInfo

## O Projekcie
InfoInfo to nowoczesny portal informatyczny stworzony jako projekt zaliczeniowy z przedmiotu **Praca w Zespole**. Witryna jest typu Single Page Application (SPA) i zawiera kluczowe informacje dla społeczności programistów oraz pasjonatów technologii.

**Adres strony:** [https://ellianel.github.io/witryna-zaliczenie-runo-lesne/](https://ellianel.github.io/witryna-zaliczenie-runo-lesne/)

## Technologie
Projekt został zbudowany z wykorzystaniem nowoczesnych narzędzi webowych:
- **HTML5** & **CSS3** (Custom Properties, Flexbox, Grid)
- **Bootstrap 5.3.3** - Framework CSS do responsywności i komponentów
- **JavaScript (ES6+)** - Interaktywność (dynamiczny rok, obsługa menu, motywy)
- **Bootstrap Icons** - Zestaw ikon wektorowych
- **GitHub Actions** - Automatyczne wdrażanie (CI/CD)
- **GitHub CLI (gh)** - Zarządzanie cyklem życia projektu (Issue, PR, Kanban)

## Zespół projektowy
**Grupa Runo Leśne**

- Michał Niekłań – Lead / PM
- Radosław Młynarczyk – dev
- Daniel Borowski – dev
- Jakub Ciecierski – dev
- Jarosław Młodziejewski – dev

## Instalacja lokalna
1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/Ellianel/witryna-zaliczenie-runo-lesne.git
   ```
2. Otwórz plik `index.html` w dowolnej przeglądarce.

---

## Instrukcja obsługi GitHub CLI (gh)

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

---

## Zasady pracy w repozytorium

### Nazwy gałęzi
Schemat: `typ/numer-issue-krotki-opis` (małe litery, bez spacji).
Przykłady:
- `feature/2-hero-section`
- `fix/4-menu-links`
- `docs/11-readme`

### Pull Requests
W opisie Pull Requesta należy wpisać numer powiązanego Issue, np.: `Closes #1`.
Wymagane jest używanie **Squash and merge** dla zachowania czystej historii.

---
*Zrealizowano w ramach zajęć: Szkoła Wyższa im. Pawła Włodkowica w Płocku (2026)*
