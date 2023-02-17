const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const registroScreen = require("../screens/registro.screen");

let url = 'http://lojaebac.ebaconline.art.br'
let user = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'

let name = `Produto EBAC ${Math.floor(Math.random() * 100)}`
let preco = `${Math.floor(Math.random() * 100)}`
let promopreco = preco - (preco*0,10)


describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await loginScreen.enterStoreAddress()
        await loginScreen.setStoreAdress(url)
        await loginScreen.clickContinue()
        await loginScreen.clickContinueCredential()
        await loginScreen.setLogin(user, password)
        await loginScreen.clickPass()
        await loginScreen.confirmPass(password)
        
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop');
    
    });
    it('Must register one product', async () => {
        await registroScreen.goToProducts()
        await registroScreen.addProd()
        await registroScreen.addPhysical()
        await registroScreen.addName(name)
        await registroScreen.addPrice(preco, promopreco)
        await registroScreen.addInventory()
        await registroScreen.pubProduct()
    });
});