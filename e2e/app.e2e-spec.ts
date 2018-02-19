import { AppPage } from './app.po';
import {by, element} from 'protractor';

describe('template-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should display a table kendo grid', () => {
    page.navigateTo();
    expect(element(by.css('kendo-grid'))).not.toBeNull();
  });

  it('should contain a table grid with several rows', () => {
    page.navigateTo();
    const rows = element.all(by.css('kendo-grid tbody>tr'));
    expect(rows.count()).toBe(77);
  });

  it('should contain a dialog when open modal is clicked', () => {
    page.navigateTo();
    const btnModal = element(by.css('#btn-modal'));
    expect(btnModal).toBeTruthy();
    expect(btnModal.getText()).toBe('Open modal');
    btnModal.click().then((x) => {
      const dialog = element(by.css('kendo-dialog'));
      expect(dialog).not.toBeNull();
    });
  });
});
