import { SkelPage } from './app.po';

describe('skel App', function() {
  let page: SkelPage;

  beforeEach(() => {
    page = new SkelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
