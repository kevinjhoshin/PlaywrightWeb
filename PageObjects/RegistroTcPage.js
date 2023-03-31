class RegistroTcPage{

    constructor(page){
        this.productosbutton = page.locator('.service-selection.service-selection--0');
        this.tarjetacreditobutton = page.locator("#product-list div[class='item-product item-product--0']");
        this.titularbutton = page.locator('.container-header--wrapper');
        this.registrartcbutton = page.getByRole('button', { name: 'Registrar' });
        this.continuarregistrobutton = page.locator('button.primary');
        this.copiardatoscliente = page.locator("giru-customer-header div span");
        this.copiarnombre= page.locator("giru-customer-header div label.title_name");
    }

    async RegistroTC (){
        const titlenombre = this.copiarnombre.nth(0).textContent();
        const titlenumerodni = this.copiardatoscliente.nth(2).textContent();
        const titlecodigounico = this.copiardatoscliente.nth(3).textContent();

        await console.log("cliente: "+await titlenombre +"con dni "+await titlenumerodni + " con cu "+await titlecodigounico);

        await this.productosbutton.click();
        await this.tarjetacreditobutton.click();
        await this.titularbutton.first().click();
        await this.registrartcbutton.first().click();
        await this.continuarregistrobutton.click();
    }


}

module.exports = {RegistroTcPage};