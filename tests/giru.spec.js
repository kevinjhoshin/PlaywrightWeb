const { test, expect } = require('@playwright/test');
const {POmanager} = require('../PageObjects/POmanager');
const dataset = JSON.parse(JSON.stringify(require('../Utils/InputGiruPedidoCorrespondencia.json')));
const dataset2 = JSON.parse(JSON.stringify(require('../Utils/inputGiruSolicitudTarjetaUpgrade.json')));

for( const datapedido of dataset)
{
    test(`pedido cambio de correspondencia para cliente con dni ${datapedido.dni}`, async ({page})=>{
        const poManager = new POmanager(page);

        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(datapedido.username,datapedido.password);

        const clientePage = poManager.getClientePage();
        await clientePage.AteencionAlCliente();
        await clientePage.IdentificarCliente(datapedido.dni);

        const registroTcPage = poManager.getRegistroTcPage();
        await registroTcPage.RegistroTC();

        const tramitePage = poManager.getTramitePage();
        await tramitePage.TramitarPedidoCorrespondencia(datapedido.textotramite,datapedido.responsetramite);

        const terminarPage = poManager.getTerminarPage();
        await terminarPage.TerminarTramite();

    

    });
}

for( const datasolicitud of dataset2)
{
    test.only(`solicitud cambio de tarjeta upgrade para cliente con dni ${datasolicitud.dni}`, async ({page})=>{
        const poManager = new POmanager(page);
    
        const loginpage2 = poManager.getLoginPage();
        await loginpage2.goTo();
        await loginpage2.validLogin(datasolicitud.username,datasolicitud.password);
    
        const clientePage2 = poManager.getClientePage();
        await clientePage2.AteencionAlCliente();
        await clientePage2.IdentificarCliente(datasolicitud.dni);
    
        const registroTcPage = poManager.getRegistroTcPage();
        await registroTcPage.RegistroTC();
    
        const tramitePage = poManager.getTramitePage();
        await tramitePage.TramitarCambioTarjetaUpgrade(datasolicitud.marcatipo,datasolicitud.tipocliente,datasolicitud.fechaentrega,datasolicitud.textotramite,datasolicitud.responsetramite);
    
        const terminarPage = poManager.getTerminarPage();
        await terminarPage.TerminarTramite();
    })
}





/*test('tramitar pedido en giru copia respaldo', async ({page})=>{

    const loginPage = new LoginPage(page);
    const username = "x11624"
    const password = "12345678"

    await page.goto("http://20.62.34.108");
    await page.locator("#username").fill("x11624");
    await page.locator("#password").fill("12345678");
    await page.locator("button.primary").click();

    await page.locator("a[href='#/customer-support']").click();

    await page.locator('#dropdown-select').click();
    await page.locator('#dropdown-select ul li[id="DNI"]').click();
    //await page.getByText('D.N.I.').click();
    await page.locator(".text-container input").fill('73968999');
    await page.locator('button.primary').click();

    await page.locator('.service-selection.service-selection--0').click();
    await page.locator("#product-list div[class='item-product item-product--0']").click();
    await page.locator('.container-header--wrapper').first().click();
    await page.getByRole('button', { name: 'Registrar' }).click();

    await page.locator('button.primary').click();
    await page.locator('#requestType').click();
    await page.locator('#requestType ul li#TTR0002').click();
    await page.locator('#typology').click();
    await page.locator("#typology ul li[id='170']").click();
    await page.locator('#reasonClaim').click();
    await page.locator('#reasonClaim ul li[id="1539"]').click();
    await page.locator('#deliverType').click();
    await page.locator("#deliverType ul li[id='2|Envío por mail']").click();
    await page.locator('#deliverEmail').click();
    await page.locator('#deliverEmail ul li').first().click();
    await page.locator('#deliverForm').click();
    await page.locator("#deliverForm ul li[id='01|No generar información de pago']").click();
    await page.locator('div textarea[placeholder="Describe tu apreciación del trámite"]').fill("Pedido cambio forma enviode correspondencia");
    await page.locator('div textarea[placeholder="Este comentario se visualizará en la hoja de reclamo"]').fill("Respuesta al pedido conforme o noconforme");




    await page.pause();

});

test('test codegen', async ({ page }) => {
    await page.goto('http://20.62.34.108/');
    await page.goto('http://20.62.34.108/#/');
    await page.goto('http://20.62.34.108/#/login');
    await page.locator('#username').click();
    await page.locator('#username').fill('x11624');
    await page.locator('#password').click();
    await page.locator('#password').fill('789789789');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await page.locator('giru-spinner-ibk div').first().dblclick();
    await page.getByRole('link', { name: 'ATENCIÓN AL CLIENTE' }).click();
    await page.locator('div').filter({ hasText: 'Seleccione' }).first().click();
    await page.getByText('D.N.I.').click();
    await page.getByRole('textbox').fill('73968999');
    await page.getByRole('button', { name: 'Validar' }).click();
    await page.getByText('ProductosTodos los productos del banco').click();
    await page.locator('div').filter({ hasText: 'Tarjeta de crédito' }).nth(1).click();
    await page.locator('div').filter({ hasText: 'Titular' }).nth(1).click();
    await page.getByRole('button', { name: 'Registrar' }).click();
    await page.getByRole('button', { name: 'Continuar con el registro' }).click();
    await page.locator('div').filter({ hasText: 'Selecciona uno' }).first().click();
    await page.locator('#TTR0002').click();
    await page.locator('div').filter({ hasText: 'Escoge la tipología adecuada' }).first().click();
    await page.locator('[id="\\31 70"]').click();
    await page.locator('div').filter({ hasText: 'Despliega para añadir un motivo' }).first().click();
    await page.locator('[id="\\31 539"]').click();
    await page.locator('#deliverType div').filter({ hasText: 'Seleccione...' }).first().click();
    await page.getByRole('listitem').filter({ hasText: 'Envío por mail' }).click();
    await page.locator('#deliverEmail div').first().click();
    await page.locator('[id="PERSONAL\\|PRUEBAINTERBANK1\\@GMAIL\\.COM"]').click();
    await page.locator('div').filter({ hasText: 'Seleccione...' }).nth(2).click();
    await page.getByRole('listitem').filter({ hasText: 'No generar información de pago' }).click();
    await page.getByPlaceholder('Describe tu apreciación del trámite').click();
    await page.getByPlaceholder('Describe tu apreciación del trámite').fill('prueba test resolver tramite');
    await page.getByPlaceholder('Este comentario se visualizará en la hoja de reclamo').click();
    await page.getByPlaceholder('Este comentario se visualizará en la hoja de reclamo').fill('recibido tramite ok');
    await page.locator('div').filter({ hasText: 'Seleccione' }).first().click();
    await page.locator('[id="\\39 12978428"]').click();
    await page.getByText('Claro').click();
    await page.locator('div').filter({ hasText: 'Seleccione' }).first().click();
    await page.locator('[id="PRUEBAINTERBANK1\\@GMAIL\\.COM"]').click();
    await page.getByRole('button', { name: 'Registrar' }).click();
    await page.getByText('173506').click();
    await page.getByRole('button', { name: 'Terminar atención' }).click();
  });
  test('codegen GIRU SOLICITUD UPGRADE', async ({ page }) => {
  await page.goto('http://20.62.34.108/#/login');
  await page.locator('#username').click();
  await page.locator('#username').fill('b36142');
  await page.locator('#username').press('Tab');
  await page.locator('#password').fill('123456789');
  await page.locator('#password').press('Enter');
  await page.getByRole('link', { name: 'ATENCIÓN AL CLIENTE' }).click();
  await page.locator('div').filter({ hasText: 'Seleccione' }).first().click();
  await page.getByText('D.N.I.').click();
  await page.getByRole('textbox').fill('73968789');
  await page.getByRole('button', { name: 'Validar' }).click();
  await page.getByText('ProductosTodos los productos del banco').click();
  await page.locator('div').filter({ hasText: 'Tarjeta de crédito' }).nth(1).click();
  await page.locator('div').filter({ hasText: 'Titular' }).nth(1).click();
  await page.getByRole('button', { name: 'Registrar' }).first().click();
  await page.getByRole('button', { name: 'Continuar con el registro' }).click();
  await page.getByText('Selecciona uno').click();
  await page.locator('#TTR0002').click();
  await page.getByText('Escoge la tipología adecuada').click();
  await page.locator('div').filter({ hasText: 'Pedido' }).nth(1).click();
  await page.locator('#TTR0003').click();
  await page.getByRole('button', { name: 'Sí, cambiar' }).click();
  await page.getByText('Escoge la tipología adecuada').click();
  await page.locator('[id="\\31 51"]').click();
  await page.locator('#select-default > .ibk-select > .flex').first().click();
  await page.getByText('American Express Green').click();
  await page.getByText('Seleccione...').first().click();
  await page.getByText('009-1.49% 1.99%').click();
  await page.getByText('Seleccione...').first().click();
  await page.getByText('Tienda Jockey Plaza').click();
  await page.locator('#deliverDate').click();
  await page.locator('#deliverDate').fill('21/03/2023_');
  await page.getByText('Seleccione...').click();
  await page.getByText('12:00 - 15:00').click();
  await page.getByPlaceholder('Describe tu apreciación del trámite').click();
  await page.getByPlaceholder('Describe tu apreciación del trámite').fill('tonto');
  await page.getByPlaceholder('Este comentario se visualizará en la hoja de reclamo').click();
  await page.getByPlaceholder('Este comentario se visualizará en la hoja de reclamo').fill('bobo');
  await page.locator('div').filter({ hasText: 'Seleccione' }).first().click();
  await page.locator('[id="\\39 12978789"]').click();
  await page.getByText('Claro').click();
  await page.locator('div').filter({ hasText: 'Seleccione' }).nth(1).click();
  await page.getByText('KEVIN.JHOSHIN@GMAIL.COM').click();
});
  */

  //await page.goto("http://20.62.34.108");
    //await page.locator("#username").fill("x11624");
    //await page.locator("#password").fill("12345678");
    //await page.locator("button.primary").click();

    //await page.locator("a[href='#/customer-support']").click();

    //await page.locator('#dropdown-select').click();
    //await page.locator('#dropdown-select ul li[id="DNI"]');
    //await page.getByText('D.N.I.').click();
    //await page.locator(".text-container input").fill('73968999');
    //await page.locator('button.primary').click();

    //await page.locator('.service-selection.service-selection--0').click();
    //await page.locator("#product-list div[class='item-product item-product--0']").click();
    //await page.locator('.container-header--wrapper').first().click();
    //await page.getByRole('button', { name: 'Registrar' }).click();

    //await page.locator('button.primary').click();
    //await page.locator('#requestType').click();
    //await page.locator('#requestType ul li#TTR0002').click();
    //await page.locator('#typology').click();
    //await page.locator("#typology ul li[id='170']").click();
    //await page.locator('#reasonClaim').click();
    //await page.locator('#reasonClaim ul li[id="1539"]').click();
    //await page.locator('#deliverType').click();
    //await page.locator("#deliverType ul li[id='2|Envío por mail']").click();
    //await page.locator('#deliverEmail').click();
    //await page.locator('#deliverEmail ul li').first().click();
    //await page.locator('#deliverForm').click();
    //await page.locator("#deliverForm ul li[id='01|No generar información de pago']").click();
    //await page.locator('div textarea[placeholder="Describe tu apreciación del trámite"]').fill("Pedido cambio forma enviode correspondencia");
    //await page.locator('div textarea[placeholder="Este comentario se visualizará en la hoja de reclamo"]').fill("Respuesta al pedido conforme o no conforme");
    //await page.locator('#telephone').click();
    //await page.locator('#telephone ul li').first().click();
    //await page.getByText('Claro').click();
    //await page.locator('#email').click();
    //await page.locator('#email ul li').first().click();



    //await page.pause();