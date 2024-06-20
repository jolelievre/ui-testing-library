import type {CommonPageInterface} from '@interfaces/index';
import type {Frame, Page} from '@playwright/test';

export interface BOBasePagePageInterface extends CommonPageInterface {
    readonly addressesLink: string;
    readonly adminAPILink: string;
    readonly administrationLink: string;
    readonly advancedParametersLink: string;
    readonly attributesAndFeaturesLink: string;
    readonly brandsAndSuppliersLink: string;
    readonly carriersLink: string;
    readonly catalogParentLink: string;
    readonly categoriesLink: string;
    readonly contactLink: string;
    readonly creditSlipsLink: string;
    readonly customerServiceLink: string;
    readonly customerServiceParentLink: string;
    readonly customerSettingsLink: string;
    readonly customersLink: string;
    readonly customersParentLink: string;
    readonly databaseLink: string;
    readonly deliverySlipslink: string;
    readonly designParentLink: string;
    readonly discountsLink: string;
    readonly emailLink: string;
    readonly emailThemeLink: string;
    readonly featureFlagLink: string;
    readonly filesLink: string;
    readonly imageSettingsLink: string;
    readonly importLink: string;
    readonly informationLink: string;
    readonly internationalParentLink: string;
    readonly invoicesLink: string;
    readonly linkWidgetLink: string;
    readonly localizationLink: string;
    readonly locationsLink: string;
    readonly logsLink: string;
    readonly menuTree: { parent: string; children: string[] }[];
    readonly merchandiseReturnsLink: string;
    readonly moduleCatalogueLink: string;
    readonly moduleManagerLink: string;
    readonly modulesParentLink: string;
    readonly monitoringLink: string;
    readonly multistoreLink: string;
    readonly orderMessagesLink: string;
    readonly orderSettingsLink: string;
    readonly ordersLink: string;
    readonly ordersParentLink: string;
    readonly outstandingLink: string;
    readonly pagesLink: string;
    readonly paymentMethodsLink: string;
    readonly paymentParentLink: string;
    readonly performanceLink: string;
    readonly positionsLink: string;
    readonly preferencesLink: string;
    readonly productSettingsLink: string;
    readonly productsLink: string;
    readonly searchLink: string;
    readonly securityLink: string;
    readonly shippingLink: string;
    readonly shippingPreferencesLink: string;
    readonly shopParametersGeneralLink: string;
    readonly shopParametersParentLink: string;
    readonly shoppingCartsLink: string;
    readonly stocksLink: string;
    readonly successfulCreationMessage: string;
    readonly successfulDeleteMessage: string;
    readonly successfulMultiDeleteMessage: string;
    readonly successfulUpdateMessage: string;
    readonly taxesLink: string;
    readonly teamLink: string;
    readonly themeAndLogoLink: string
    readonly themeAndLogoParentLink: string;
    readonly trafficAndSeoLink: string;
    readonly translationsLink: string;
    readonly webserviceLink: string;

    clickOnNotification(page: Page, tabName: string, row?: number): Promise<void>;
    clickOnNotificationsLink(page: Page): Promise<boolean>;
    clickOnNotificationsTab(page: Page, tabName: string): Promise<void>;
    clickSubMenu(page: Page, parentSelector: string): Promise<void>;
    closeSfToolBar(page: Frame | Page): Promise<void>;
    getAlertSuccessBlockContent(page: Frame | Page): Promise<string>;
    getAllNotificationsNumber(page: Page): Promise<number>;
    getNotificationsNumberInTab(page: Page, tabName: string): Promise<number>;
    getShopVersion(page:Page):Promise<string>;
    goToMyProfile(page: Page): Promise<void>;
    goToSubMenu(page: Page, parentSelector: string, linkSelector: string): Promise<void>;
    isMobileMenuVisible(page: Page): Promise<boolean>;
    isNavbarVisible(page: Page): Promise<boolean>;
    isSidebarCollapsed(page: Page): Promise<boolean>;
    isSubMenuActive(page: Page, linkSelector: string): Promise<boolean>;
    isSubmenuVisible(page: Page, parentSelector: string, linkSelector: string): Promise<boolean>;
    logoutBO(page: Page): Promise<void>;
    navigateToPageWithInvalidToken(page: Page, url: string, continueToPage?: boolean): Promise<void>;
    quickAccessToPage(page: Page, linkName: string): Promise<void>;
    quickAccessToPageNewWindow(page: Page, linkName: string): Promise<Page>;
    quickAccessToPageWithFrame(page: Page, linkName: string): Promise<void>;
    resize(page: Page, mobileSize: boolean): Promise<void>;
    search(page: Page, query: string): Promise<void>;
    setSidebarCollapsed(page: Page, isCollapsed: boolean): Promise<void>;
    viewMyShop(page: Page): Promise<Page>;
}
