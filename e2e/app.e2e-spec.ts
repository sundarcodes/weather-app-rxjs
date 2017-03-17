import { WeatherAppRxjsPage } from './app.po';

describe('weather-app-rxjs App', () => {
  let page: WeatherAppRxjsPage;

  beforeEach(() => {
    page = new WeatherAppRxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
