const { Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const { POmanager } = require('../../PageObjects/POmanager');


Before(async function () {
    const browser = await playwright.chromium.launch(
        { headless: false }
    );
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POmanager(this.page);

})

/After(async function () {
    await this.page.close();
//     console.log("Lo último en ejecutar")
 })

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' });
    }
})
