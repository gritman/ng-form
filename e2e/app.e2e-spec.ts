import { NgFormPage } from './app.po';

describe('ng-form App', () => {
  let page: NgFormPage;

  beforeEach(() => {
    page = new NgFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
