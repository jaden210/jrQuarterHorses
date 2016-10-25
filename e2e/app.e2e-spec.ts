import { JrQuarterHorsePage } from './app.po';

describe('jr-quarter-horse App', function() {
  let page: JrQuarterHorsePage;

  beforeEach(() => {
    page = new JrQuarterHorsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
