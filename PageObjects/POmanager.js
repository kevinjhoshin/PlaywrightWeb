const {LoginPage} = require('./LoginPage')
const {RegistroTcPage} = require('./RegistroTcPage')
const {ClientePage} =require('./ClientePage')
const {TramitePage} = require('./TramitePage')
const {TerminarPage} = require('./TerminarPage')

class POmanager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.clientePage = new ClientePage(this.page);
        this.registroTcPage = new RegistroTcPage(this.page);
        this.tramitePage = new TramitePage(this.page);
        this.terminarPage = new TerminarPage(this.page);
    }

    getLoginPage (){
        return this.loginPage;
    }

    getClientePage (){
        return this.clientePage;
    }

    getRegistroTcPage (){
        return this.registroTcPage;
    }

    getTramitePage(){
        return this.tramitePage;
    }

    getTerminarPage(){
        return this.terminarPage;
    }

}

module.exports = {POmanager};