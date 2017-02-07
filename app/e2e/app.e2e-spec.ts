import { VolleyStatsPage } from './app.po';

describe('volley-stats App', function() {
  let page: VolleyStatsPage;

  beforeEach(() => {
    page = new VolleyStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
