import Component from "../../tamplates/components";
import { PageIds } from '../../../pages/app/indexApp'

const Buttons = [
  {
    id: PageIds.MainPage,
    text: 'Main Page'
  },
  {
    id: PageIds.SettingsPage,
    text: 'Settings Page'
  },
  {
    id: PageIds.StatisticsPage,
    text: 'Statistics Page'
  }
]

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className)
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');
    // create buttons(links)
    Buttons.forEach(button => {
      // this button
      const buttonHTML = document.createElement('a');
      // this button link assigned with 'href'
      buttonHTML.href = `#${button.id}`;
      // this button text
      buttonHTML.innerText = button.text;
      // output buttons to the container (div)/('pageButtons')
      pageButtons.append(buttonHTML);
    })

    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;