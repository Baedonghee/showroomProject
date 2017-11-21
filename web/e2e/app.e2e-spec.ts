import { ShowroomPage } from './app.po';

describe('showroom App', () => {
  let page: ShowroomPage;

  beforeEach(() => {
    page = new ShowroomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
