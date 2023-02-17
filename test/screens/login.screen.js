class loginScreen {
    get #enterLogin() { return $('id:button_login_store')}
    get #storeAdress() { return $('android= new UiSelector().text("Site address")')}
    get #continue() { return $('id:bottom_button')}
    get #continueCredential() { return $('id:login_site_creds')}

    get #userfield() { return $('android= new UiSelector().text("Username")')}

    get #passwordfield() { return $('android= new UiSelector().text("Password")')}

    get #continuePass() { return $('id:login_enter_password')}
    
    async enterStoreAddress() {
        await this.#enterLogin.click()
    }
    async setStoreAdress(url) {
        await this.#storeAdress.setValue(url)
    }
    async clickContinue() {
        await this.#continue.click()
    }
    async clickContinueCredential() {
        await this.#continueCredential.click()
    }

    async setLogin(email, password) {
        await this.#userfield.setValue(email)
        await this.#passwordfield.setValue(password)
        await this.#continue.click()
    }

    async clickPass() {
        await this.#continuePass.click()
    }

    async confirmPass(password) {
        await this.#passwordfield.setValue(password)
        await this.#continue.click()
    }
}

module.exports = new loginScreen()