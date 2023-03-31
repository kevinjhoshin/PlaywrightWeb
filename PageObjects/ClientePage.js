class ClientePage{
    
    constructor(page){
        this.AtencionClientebutton = page.locator("a[href='#/customer-support']");
        this.SelecDoc = page.locator('#dropdown-select');
        this.SelecDNI = page.locator('#dropdown-select ul li[id="DNI"]');
        this.DocInput = page.locator(".text-container input");
        this.IngresarCliente = page.locator('button.primary');
    }

    async AteencionAlCliente (){
        await this.AtencionClientebutton.click();
    
    }

    async IdentificarCliente (dni){
        await this.SelecDoc.click();
        await this.SelecDNI.click();
        await this.DocInput.fill(dni);
        await this.IngresarCliente.click();

        //await console.log("cliente identificado con documento DNI " + await dni)

    }


}

module.exports = {ClientePage};