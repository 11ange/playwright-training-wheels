// @ts-check
const { test, expect } = require('@playwright/test');

test('Deve exibir a home page', async ({ page }) => {
    await page.goto('https://training-wheels-qaninja.herokuapp.com');
  
    // Verifica o titulo da pagina
    await expect(page).toHaveTitle('Training Wheels | QAninja');
  
    // cria o localizador
    const menu = page.locator('ul[class="menu-list"]');
  
    // Verifica se o localizador está visível
    await expect(menu).toBeVisible()
  
  });