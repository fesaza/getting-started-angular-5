import { CrudExamplePage } from './app.po';

describe('crud-example App', () => {
  let page: CrudExamplePage;

  beforeEach(() => {
    page = new CrudExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
