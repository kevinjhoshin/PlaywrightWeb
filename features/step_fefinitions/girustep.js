const { Given, When, Then } = require('@cucumber/cucumber')
const { POmanager } = require('../../PageObjects/POmanager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('Cargo la pagina de GIRU en chrome e inicio sesion {string} {string}', { timeout: 100 * 10000 }, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions

    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});

When('Identifico al cliente con documento dni {string}', { timeout: 100 * 10000 }, async function (dni) {
    // Write code here that turns the phrase above into concrete actions
    const clientePage = this.poManager.getClientePage();
    await clientePage.AteencionAlCliente();
    await clientePage.IdentificarCliente(dni);
});

When('Registro su tarjeta a la cual va a tramitar', { timeout: 100 * 10000 }, async function () {
    // Write code here that turns the phrase above into concrete actions
    const registroTcPage = this.poManager.getRegistroTcPage();
    await registroTcPage.RegistroTC();
});

When('Tipifico la solicitud de tarjeta upgrade con marcatipo destino {string} {string} y fecha {string} {string} {string}', { timeout: 100 * 10000 }, async function (marcatipo, tipocliente, fechaentrega, textotramite, responsetramite) {
    const tramitePage = this.poManager.getTramitePage();
    await tramitePage.TramitarCambioTarjetaUpgrade(marcatipo, tipocliente, fechaentrega, textotramite, responsetramite);
});

Then('Realizamos con exito y obtendremos el numero de tramite', { timeout: 100 * 10000 }, async function () {
    const terminarPage = this.poManager.getTerminarPage();
    await terminarPage.TerminarTramite();
})

When('Tipifico el pedido cambio forma envio de correspondencia a envio por email sin generar pago {string} {string}', { timeout: 100 * 10000 }, async function(textotramite,responsetramite){
    const tramitePage = this.poManager.getTramitePage();
    await tramitePage.TramitarPedidoCorrespondencia(textotramite,responsetramite);
})