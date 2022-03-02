import { Page } from 'playwright'
class HomePage {

    Page: Page

    constructor(page: Page) {
        this.Page = page;

    }

    // All UI elemets in home screen
    btnCustomerLogin = async () => this.Page.$('button[ng-click="customer()"]')
    btnBankManagerLogin = async () => this.Page.$('button[ng-click="manager()"]')

    public async BankManagerLogin() {
        
        await (await this.Page.waitForSelector('button[ng-click="manager()"]'))
        await (await this.btnBankManagerLogin())?.click();

    }

} export { HomePage }