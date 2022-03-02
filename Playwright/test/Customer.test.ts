import { Browser, BrowserContext, chromium, Page } from "playwright"
import { HomePage } from '../pages/Home.Page'
import {AddCustomerPage} from '../pages/Add.Customer.Page'
import { testData } from "../testData/TestData"

describe("Bank Test", () => {

    let browser: Browser
    let context: BrowserContext
    let page: Page



    beforeAll(async () => {

        //jest.setTimeout(100000);
        browser = await chromium.launch({
            headless: true,
            //headless: false,
            channel: "chrome",
            slowMo: 200

        })
        context = await browser.newContext()
        page = await browser.newPage()
        await page.goto(testData.baseUrl);

    })
    
    test("Verify successful Login into Bank as Manager", async () => {

        let manager = new HomePage(page)
        await manager.BankManagerLogin()

    })

    test("Verify Add Customer", async () => {

        let addCustomer = new AddCustomerPage(page)
        await addCustomer.AddCustomer(testData.firstName, testData.lastName, testData.postalCode)

    })

    afterAll(async () => {
        browser.close()
    })
})