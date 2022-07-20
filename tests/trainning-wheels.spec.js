// @ts-check
const { test, expect } = require('@playwright/test');

const filmes = [
    'cap3',
    'avengers4',
    'ironman',
    'blackpanther',
    'strange',
    'thor'
]

test.describe('Todos os testes de "Manipule Elementos da WEB" juntos', () => {

    test('1- Deve exibir a home page', async ({ page }) => {
        await page.goto('/');

        // Verifica o titulo da pagina
        await expect(page).toHaveTitle('Training Wheels | QAninja');

        // cria o localizador
        const menu = page.locator('ul[class="menu-list"]');

        // Verifica se o localizador está visível
        await expect(menu).toBeVisible()

    });

    test('2- Deve logar com sucesso', async ({ page }) => {
        await page.goto('/login');

        await page.locator('#nickId').fill('papitorocks');
        await page.locator('#passId').fill('pwd123');
        await page.locator('button[type="submit"]').click()

        const mensagemEsperada = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'

        await expect(page.locator('.title')).toHaveText('Olá Papito, bem-vindo ao Orkut')
        await expect(page.locator('.subheader')).toHaveText(mensagemEsperada)
        await page.waitForTimeout(3000)

    });

    test('3- Deve selecionar os checkboxes desejados', async ({ page }) => {
        await page.goto('/checkboxes');

        //  forEach construct never awaits the results. It just starts a bunch of page.goto() 
        //    operations at the same time, but never waits for them to finish
        // filmes.forEach(async (item2) => {
        //     await page.locator(`input[name=${item2}]`).check()
        //     await page.locator(`input[name=${item2}]`).isChecked()
        // })

        for (const item of filmes) {
            await page.locator(`input[name=${item}]`).check()
            await page.locator(`input[name=${item}]`).isChecked()
        }
        await page.waitForTimeout(8000)

    });
})

