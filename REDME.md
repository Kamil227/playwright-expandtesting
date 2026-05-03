# Playwright - notatki dla osoby początkującej

Strona do ćwiczeń:
`https://practice.expandtesting.com`

## Co to jest Playwright?
Playwright to narzędzie do automatyzacji przeglądarki.
Test "udaje człowieka": wchodzi na stronę, klika, wpisuje dane i sprawdza wynik.

## Jak czytać ten projekt
- `tests/` - tutaj są testy (`*.spec.ts`)
- `pages/` - tutaj możesz trzymać selektory i akcje dla konkretnej strony (Page Object)
- `fixtures/` - wspólne ustawienia testów (np. automatyczne wejście na URL)
- `test-data/` - dane testowe, np. JSON z wartościami do wpisania
- `playwright.config.ts` - konfiguracja globalna (np. `baseURL`)

## Najważniejsze pojęcia prostym językiem
- `page` - karta przeglądarki, na której test pracuje.
- `locator` - sposób znalezienia elementu na stronie (przycisk, input, link).
- `fixture` - przygotowanie testu "z góry" (np. automatyczny `goto` przed każdym testem).
- `Page Object` - klasa w `pages/`, która trzyma selektory/metody dla jednej podstrony.

## Dwie opcje pracy
1. Prosto (na start):
piszesz wszystko w teście i używasz `page.getBy...`.

2. Czyściej (gdy testów jest więcej):
trzymasz selektory w `pages/*.page.ts`, a test używa gotowego obiektu strony.

## Dlaczego czasem `getByRole('button')` nie działa?
Bo nie każdy element wygląda jak button.
Przykład:
`<a href="/inputs">Try it out</a>` to **link**, nie button.
Dlatego:
- poprawnie: `getByRole('link', { name: 'Try it out' })`
- niepoprawnie: `getByRole('button', { name: 'Try it out' })`

## Gdy jest kilka takich samych elementów
Użyj:
- `.first()`
- `.last()`
- `.nth(0)`, `.nth(1)`, ...

Przykład:
```ts
const tryItOut = page.getByRole('link', { name: 'Try it out' });
await tryItOut.nth(0).click();
```

## JSON z danymi testowymi
Przykład `test-data/webInputs.json`:
```json
{
  "inputNumber": "123"
}
```

Import w teście:
```ts
import testData from '../test-data/webInputs.json';
```

Użycie:
```ts
await input.fill(testData.inputNumber);
```

## Minimalny poprawny przykład testu
```ts
import { test, expect } from '../fixtures/test.fixtures';
import testData from '../test-data/webInputs.json';

test('Input number', async ({ page }) => {
  await page.getByLabel('Input: Number').fill(testData.inputNumber);
  await expect(page.getByLabel('Input: Number')).toHaveValue(testData.inputNumber);
});
```

## Minimalny fixture (wejście na stronę przed każdym testem)
```ts
import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('/inputs');
    await use(page);
  },
});

export { expect } from '@playwright/test';
```

I pamiętaj o `baseURL` w `playwright.config.ts`:
```ts
use: {
  baseURL: 'https://practice.expandtesting.com',
}
```

## Najczęstsze błędy początkujących
- Importujesz klasę, której nazwa nie zgadza się z `export class ...`.
- Używasz zmiennej, której nie zdefiniowałeś (np. `inputNumber` zamiast `testData.inputNumber`).
- Tworzysz obiekt w `beforeEach`, ale nigdzie go nie używasz.
- Importujesz `test` z Playwright zamiast z własnego fixture.

## Jak uruchomić testy
```bash
npx playwright test
```

Tryb UI:
```bash
npx playwright test --ui
```

## Dobra praktyka na start
- Najpierw zrób 1 działający test end-to-end.
- Potem dopiero przenoś selektory do `pages/`.
- Jak coś nie działa, sprawdź HTML elementu i jego rolę (`link`, `button`, `textbox`).
