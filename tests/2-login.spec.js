// @ts-check
const { test, expect } = require('@playwright/test');

test('Deve logar com sucesso', async ({ page }) => {
    await page.goto('https://training-wheels-qaninja.herokuapp.com/login');
  
    await page.locator('#nickId').fill('papitorocks');
    await page.locator('#passId').fill('pwd123');
    await page.locator('button[type="submit"]').click()

    const mensagemEsperada='Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'
  
    await expect(page.locator('.title')).toHaveText('Olá Papito, bem-vindo ao Orkut')
    await expect(page.locator('.subheader')).toHaveText(mensagemEsperada)
    await page.waitForTimeout(3000)

  });