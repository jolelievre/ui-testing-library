//import testContext from '@utils/testContext';

let loginPage = require('@pages/BO/login');
import dashboardPage from '@pages/BO/dashboard';

import {expect} from '@playwright/test';
import type {Page, TestInfo} from '@playwright/test';

export default {
  async loginBO(
    testInfo: TestInfo,
    page: Page,
    email: string = global.BO.EMAIL,
    password: string = global.BO.PASSWD,
  ): Promise<void> {
    //await testContext.addContextItem(testInfo, 'testIdentifier', 'loginBO');

    console.log(loginPage);
    console.log(loginPage.goTo);

    await loginPage.goTo(page, global.BO.URL);
    await loginPage.successLogin(page, email, password);

    const pageTitle = await dashboardPage.getPageTitle(page);
    expect(pageTitle).toContain(dashboardPage.pageTitle);
  },

  async logoutBO(testInfo: TestInfo, page: Page): Promise<void> {
    //await testContext.addContextItem(testInfo, 'testIdentifier', 'logoutBO');

    await dashboardPage.logoutBO(page);

    //const pageTitle = await loginPage.getPageTitle(page);
    //expect(pageTitle).toContain(loginPage.pageTitle);
  },
};
