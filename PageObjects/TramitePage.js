class TramitePage{

    constructor(page,marcatipo){
        this.page = page;
        this.marcatipo = marcatipo;

        this.estadoTC = page.locator("#card-body .h-regular");

        this.selecEnvioEmail =page.getByRole('listitem').filter({ hasText: 'Envío por mail' });
        this.selecNoGenerarPago = page.getByRole('listitem').filter({ hasText: 'No generar información de pago' });

        this.tramitebutton = page.locator('#requestType');
        this.pedidobutton = page.locator('#requestType ul li#TTR0002');
        this.tipologiabutton = page.locator('#typology');
        this.cambiocorresbutton = page.locator("#typology ul li[id='245']");
        this.listmotivo = page.locator('#reasonClaim');
        this.tarjetacredito = page.locator('#reasonClaim ul li[id="1612"]');
        this.tipoenvio = page.locator('#deliverType');
        this.envioemail = page.locator("#deliverType ul li[id='2|Envío por mail']");
        this.deliveriemail = page.locator('#deliverEmail');
        this.deliemailselect = page.locator('#deliverEmail ul li');
        this.deliveriform = page.locator('#deliverForm');
        this.delinoformpago = page.locator("#deliverForm ul li[id='01|No generar información de pago']");
        this.describetramite = page.locator('div textarea[placeholder="Describe tu apreciación del trámite"]');
        this.responsecomentario = page.locator('div textarea[placeholder="Este comentario se visualizará en la hoja de reclamo"]');
        this.listtelefono = page.locator('#telephone');
        this.selectelefono = page.locator('#telephone ul li');
        this.clarobutton = page.getByText('Claro');
        this.listemail = page.locator('#email');
        this.selecemagil = page.locator('#email ul li');
        this.registrartramite = page.locator("#claim-form__btn-submit");


        this.solicitudbutton = page.locator('#requestType ul li#TTR0003');
        this.cambiodetrjbutton = page.locator("#typology ul li[id='151']");
        this.upgradetarjeta = page.locator('#reasonClaim ul li[id="1092"]');
        this.marcatipobutton = page.locator('#select-default');
        //this.marcatipoitem= page.$$('span:has-text("Visa clasica")');
        //this.marcatipoitem2 = page.locator('//*[@id="register-process"]/giru-claim-register/div/giru-claim-form/form/giru-dinamic-typology/giru-change-card/div/div[2]/div[1]/div/app-ibk-select/div/div/ul/li');
        this.marcatipoitem3 = page.getByRole('listitem');
        this.tipocliente3 = page.getByRole('listitem');
        this.tipoclienteitem= page.getByText('553-3.98% 5.01% ');
        this.direccionebutton= page.locator("label[for='placeDelivery-0|Dirección exacta']");
        this.tiendaselec = page.getByText('Tienda Jockey Plaza ');
        this.fechainput = page.locator('#deliverDate');
        this.horaselec = page.getByText('09:00 - 12:00 ');
        
        this.nose123 = page;
    }

    async TramitarPedidoCorrespondencia (textotramite,responsetramite){
        const titlenumeropan = this.estadoTC.nth(3).textContent();
        const titlenumerocuenta = this.estadoTC.nth(4).textContent();
        await console.log("numero pan: "+await titlenumeropan +",  Numero cuenta: "+await titlenumerocuenta);
        
        const titlemailenviado = this.envioemail.textContent();
        const titlenogenerpago = this.delinoformpago.textContent();


        
        await this.tramitebutton.click();
        await this.pedidobutton.click();
        await this.tipologiabutton.click();
        await this.cambiocorresbutton.click();
        await this.listmotivo.click();
        await this.tarjetacredito.click();
        await this.tipoenvio.click();
        await this.envioemail.click();
        await this.deliveriemail.click();
        await this.deliemailselect.first().click();
        await this.deliveriform.click();
        await this.delinoformpago.click();
        await console.log("tipo envio: " +await titlemailenviado);
        await console.log("forma de envio: " +await titlenogenerpago);
        await this.describetramite.fill(textotramite);
        await this.responsecomentario.fill(responsetramite);
        await this.listtelefono.click();
        await this.selectelefono.first().click();
        await this.clarobutton.click();
        await this.listemail.click();
        await this.selecemagil.first().click();


        await this.registrartramite.click();

    }

    async TramitarCambioTarjetaUpgrade (marcatipo,tipocliente,fechaentrega,textotramite,responsetramite){
        
        const titlemarcatipo = this.estadoTC.nth(0).textContent();
        const titleestadoactivo = this.estadoTC.nth(1).textContent();
        const titlenumeropan = this.estadoTC.nth(3).textContent();
        const titlenumerocuenta = this.estadoTC.nth(4).textContent();
        await console.log("marcatipo actual: " +await titlemarcatipo +",  Estado tarjeta: " +await titleestadoactivo);
        await console.log("numero pan: "+await titlenumeropan +",  Numero cuenta: "+await titlenumerocuenta);


        await this.tramitebutton.click();
        await this.solicitudbutton.click();
        await this.tipologiabutton.click();
        await this.cambiodetrjbutton.click();
        await this.listmotivo.click();
        await this.upgradetarjeta.click();
        await this.marcatipobutton.nth(0).click();
        await this.marcatipoitem3.filter({ hasText: marcatipo }).click();

        await this.marcatipobutton.nth(1).click();
        await this.tipocliente3.filter({ hasText: tipocliente }).click();
        await this.marcatipobutton.nth(2).click();
        await this.tiendaselec.click();
        await this.fechainput.fill(fechaentrega);
        await this.marcatipobutton.nth(3).click();
        await this.horaselec.click();

        await console.log("marcatipo destino: " +marcatipo +", condicion economica: "+tipocliente +", fecha entrega: "+fechaentrega);
        //await console.log("con condicion economica: " +tipocliente);
        //await console.log("con fecha de entrega: " +fechaentrega);
        await this.describetramite.fill(textotramite);
        await this.responsecomentario.fill(responsetramite);
        await this.listtelefono.click();
        await this.selectelefono.first().click();
        await this.clarobutton.click();
        await this.listemail.click();
        await this.selecemagil.first().click();

        await this.registrartramite.click();

    }



}
module.exports = {TramitePage};