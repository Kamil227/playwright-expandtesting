# Playwright Start - poradnik ogólny

Ten plik to ogólny start dla osoby, która zaczyna od zera.

## 1. Co to jest Playwright
Playwright automatyzuje przeglądarkę.
To znaczy: test może wejść na stronę, kliknąć element, wpisać tekst i sprawdzić wynik.

## 2. Jak myśleć o teście
Każdy test ma prosty schemat:
1. Wejdź na stronę.
2. Wykonaj akcję (kliknij, wpisz, wybierz).
3. Sprawdź efekt (`expect`).

## 3. Minimalny test
```ts
import { test, expect } from '@playwright/test';

test('przykład', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## 4. Najważniejsze pojęcia
- `test(...)` - pojedynczy scenariusz testowy.
- `page` - karta przeglądarki.
- `locator` - sposób znalezienia elementu na stronie.
- `expect(...)` - sprawdzenie, czy wynik jest poprawny.

## 5. Jak znajdować elementy
Najpierw używaj czytelnych selektorów:
- `getByRole(...)`
- `getByLabel(...)`
- `getByText(...)`

Przykład:
```ts
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByLabel('Email').fill('test@example.com');
```

## 6. Kiedy element to link, a nie button
Jeśli w HTML jest `<a ...>`, to zwykle jest to `role='link'`.
Wtedy użyj:
```ts
page.getByRole('link', { name: 'Try it out' })
```

## 7. Dobre nawyki od początku
- Jeden test = jedna odpowiedzialność.
- Nazwy testów pisz tak, żeby mówiły "co ma działać".
- Nie kopiuj tych samych kroków do wielu testów.
- Jak kroki się powtarzają, przenieś je do fixture albo Page Object.

## 8. Kiedy używać fixture
Fixture jest dobre, gdy chcesz zawsze robić to samo na starcie testu, np.:
- wejście na konkretną stronę,
- logowanie,
- przygotowanie danych.

## 9. Kiedy używać Page Object (`pages/*.page.ts`)
Page Object dodawaj, gdy:
- masz dużo testów na tej samej stronie,
- selektory się powtarzają,
- chcesz łatwo utrzymywać testy.

Na samym początku możesz pisać testy bez Page Object.

## 10. Dane testowe (JSON)
Jeśli używasz tych samych wartości w wielu testach, trzymaj je w `test-data/*.json`.
To ułatwia zmianę danych bez ruszania logiki testu.

## 11. Komendy, które warto znać
Uruchom wszystkie testy:
```bash
npx playwright test
```

Uruchom z interfejsem:
```bash
npx playwright test --ui
```

Pokaż raport:
```bash
npx playwright show-report
```

## 12. Co robić, gdy test nie działa
1. Sprawdź, czy element na pewno istnieje na stronie.
2. Sprawdź, czy używasz poprawnej roli (`link`, `button`, `textbox`).
3. Uruchom test w trybie UI i zobacz krok po kroku, gdzie się sypie.
4. Uprość test do minimum i dobudowuj kolejne kroki.

## 13. Plan nauki na pierwsze dni
1. Napisz 3 bardzo proste testy (wejście, kliknięcie, walidacja).
2. Dodaj jeden fixture z `goto`.
3. Dodaj pierwszy Page Object z 1-2 selektorami.
4. Przenieś dane testowe do JSON.
5. Naucz się czytać raport i trace.
