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
