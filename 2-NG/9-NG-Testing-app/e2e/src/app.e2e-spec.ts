import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should display browser title olam', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('olam');
  });
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app1!');
  });
  it('should greet with good morning', () => {
    page.navigateTo();
    expect(element(by.css('.card-body')).getText()).toEqual('good morning');
  });


});
