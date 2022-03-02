import { Page } from 'playwright'
import 'jest-extended';
class AddCustomerPage {


    Page: Page

    constructor(page: Page) {
        this.Page = page;

    }

    // All UI elemets in Add Customer Page
    btnAddCustomer = async () => this.Page.$('//button[normalize-space()="Add Customer"]')
    btnOpenCustomer = async () => this.Page.$('.btn.btn-lg.tab[ng-class="btnClass2"]')
    btnCustomers = async () => this.Page.$('.btn.btn-lg.tab[ng-class="btnClass3"]"]')
    txtFirstName = async () => this.Page.$('input[placeholder="First Name"]')
    txtLastName = async () => this.Page.$('input[placeholder="Last Name"]')
    txtPostCode = async () => this.Page.$('input[placeholder="Post Code"]')
    btnSubmitCustomer = async () => this.Page.$('button[type="submit"]')


    public async AddCustomer(firstName: string, lastName: string, postalCode: string) {

            await (await this.Page.waitForSelector('//button[normalize-space()="Add Customer"]'))
            await (await this.btnAddCustomer())?.click()
            await (await this.Page.waitForSelector('input[placeholder="First Name"]'))
            await (await this.txtFirstName())?.type(firstName)
            await (await this.Page.waitForSelector('input[placeholder="Last Name"]'))
            await (await this.txtLastName())?.type(lastName)
            await (await this.Page.waitForSelector('input[placeholder="Post Code"]'))
            await (await this.txtPostCode())?.type(postalCode)
            await (await this.Page.waitForSelector('button[type="submit"]'))
            await (await this.btnSubmitCustomer())?.click()

    }


} export { AddCustomerPage }































