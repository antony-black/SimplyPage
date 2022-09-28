import Page from '../../core/tamplates/pageAbstract';
import MainPage from '../main/indexMain';

class SettingsPage extends Page {
  static TextObject= {
    MainTitle: 'Settings Page'
  }

  constructor(id: string) {
    super(id)
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}




export default SettingsPage;