import { VehicollateAdminPage } from './app.po';

describe('vehicollate-admin App', function() {
  let page: VehicollateAdminPage;

  beforeEach(() => {
    page = new VehicollateAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
