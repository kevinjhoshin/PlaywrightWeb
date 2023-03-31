class TerminarPage{
    constructor(page){
        this.page = page;
        this.txtexitotramite = page.locator("#no-proceed-section .title_name");
        this.txtenvioemail = page.locator("#deliverType ul li[id='2|Envío por mail']");
        this.txtemailenviado = page.locator('#deliverEmail ul li');
        this.txtnumerotramite = page.locator("#no-proceed-section .parrafo");
        this.terminarbutton = page.locator("#end-atention");
        

    }

    async TerminarTramite(){
        const titletext = this.txtexitotramite.textContent();
        await console.log(await titletext);
        const tramitetext = this.txtnumerotramite.first().textContent();
        await console.log("numero de tramite: " +await tramitetext);
        await console.log("-----------------------------------------------------------")

       
        
        //await this.console.log("tipo de envio: " +await txtenvioemail);
        //await this.console.log("email destino: " + await txtemailenviado);
        //await this.console.log(await txtexitotramite);
        //await this.console.log("número de tramite: " + await txtnumerotramite);
        await this.terminarbutton.click();
    }


}

module.exports = {TerminarPage};