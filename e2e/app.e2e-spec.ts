import { TheMomentPage } from './app.po';

describe('the-moment App', function() {
  let page: TheMomentPage;

  beforeEach(() => {
    page = new TheMomentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
