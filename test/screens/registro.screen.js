class registroScreen {
    get #enterProducts(){
        return $('id:products')
    }
    async goToProducts(){
        await this.#enterProducts.click()
    }

    get #addProduct(){
        return $('id:addProductButton')
    }
    async addProd(){
        await this.#addProduct.click()
    }

    get #productField(){
        return $('android.view.ViewGroup')
    }
    async addPhysical(){
        await this.#productField.click()
    }

    get #nameProduct(){
        return $('id:editText')
    }
    async addName(name){
        await this.#nameProduct.setValue(name)
    }

    get #addPrice(){
        return $('android.view.ViewGroup')
    }
    get #regPrice(){
        return $('android.widget.EditText')
    }    
    get #salePrice(){
        return $('id:edit_text')
    }
    get #navigate(){
        return $('android.widget.ImageButton')
    }
    
    async addPrice(preco, promopreco){
        await this.#addPrice.click(),
        
        await this.#regPrice.setValue(preco),
    
        await this.#salePrice.setValue(promopreco)

        await this.#navigate.click()
    }

    get #inventory(){
        return $('android.view.ViewGroup')
    }
    get #stockUnity(){
        return $('android.widget.Switch')
    }
    async addInventory(){
        await this.#inventory.click()
        await this.#stockUnity.click()
        await this.#navigate.click()
    }

    get #publish(){
        return $('id:menu_done')
    }
    async pubProduct(){
        await this.#publish.click()
        await this.#navigate.click()
    }
}
module.exports = new registroScreen()