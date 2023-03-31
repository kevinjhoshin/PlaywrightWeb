class LoginPage {


    constructor(page){
        this.page = page;
        this.userInbutton= page.locator("#username");
        this.passwordbutton= page.locator("#password");
        this.validarbutton= page.locator("button.primary");
        
        

    }  

    async goTo(){
        await this.page.goto("http://20.62.34.108")

    }

    async validLogin (username, password)
    {
        await this.userInbutton.fill(username);
        await this.passwordbutton.fill(password);
        await this.validarbutton.click();
    }

}

module.exports = {LoginPage};