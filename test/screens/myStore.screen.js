class MyStoreScreen {
    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getStoreName(){
        await this.#myStoreName.waitForExist()
        return await this.#myStoreName.getText()
    }
}
module.exports = new MyStoreScreen()
