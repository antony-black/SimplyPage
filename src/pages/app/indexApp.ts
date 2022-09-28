import Page from "../../core/tamplates/pageAbstract";
import MainPage from "../main/indexMain";
import SettingsPage from "../settings/indexSettings";
import StatisticsPage from "../statistics/indexStatistics";
import Header from  '../../core/components/header/indexHeader';
import ErrorPage, { ErrorTypes } from "../error/indexError";

export const enum PageIds {
  MainPage = 'main-page',
  SettingsPage = 'settings-page',
  StatisticsPage = 'statistics-page'
}


// the main module/here's will be constructing the whole application
// it will response for rendering the main page and transition between pages

class App {
// data type is HTMLElement/ any of html element on the page
// with 'static' uses 'this' is banned !!!
// decause this is a 'static method' and it uses without class instances
// so as to use 'container' with 'static method', we have to make 'container' static too
  // private container: HTMLElement;
  private static container: HTMLElement = document.body;
  // create ID for every page
  private static defaultPageId: string = 'current-page';
  private initialPage: MainPage;
  private header: Header;
// this HTMLElement we can find document.queryselector('HERE IS WILL BE OUR HTML ELEMENT')
// and BODY also can be HTMLElement/any of tags can be HTMLElement data type

// it responses for rendering certain page
// we will pass ID and the page will be rendered by ID
static renderNewPage(idPage: string) {
  // document.body.innerHTML = '';
  // here is we call BODY
  // App.container.innerHTML ='';
  // get element by ID
  const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
  // check the element
  // if it exists- remove it
  if (currentPageHTML) {
    currentPageHTML.remove();
  }
  // varible 'page' with Page data type or null
  // its the finall page which will be rendered
  let page: Page | null = null;

  // How to render the neceserally page by ID?
  // 'PageIds.' it's 'enum'
  // we can replace simple strings with variables
  if (idPage === PageIds.MainPage) {
    page = new MainPage(idPage);
  } else if (idPage === PageIds.SettingsPage) {
    page = new SettingsPage(idPage);
  } else if (idPage === PageIds.StatisticsPage) {
    page = new StatisticsPage(idPage);
  } else {
    page = new ErrorPage(idPage, ErrorTypes.Error_404);
  }
  // if ID is defined
  if (page) {
    const pageHTML = page.render();
    // everytime when we create the page, the ID will be
    pageHTML.id = App.defaultPageId;
    // document.body.append(pageHTML);
    App.container.append(pageHTML);
  }
}

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);//'slice' remove '#' of console.log
      console.log('hashchange >>>', hash);
      App.renderNewPage(hash);
    })
  }

constructor() {
  // we will add all data to BODY
  // 'main-page' pass to MainPage constructor(id: string), as ID
  this.initialPage = new MainPage('main-page');
  this.header = new Header('header', 'header-container'); //'tagName' and 'className'
}

  run() {
    // NAV ussualy is on the top
    App.container.append(this.header.render())
    // const mainPageHTML = this.initialPage.render();
    // this.container.append(mainPageHTML);
    App.renderNewPage('main-page');
    this.enableRouteChange();
  }
}

export default App;

// Pages: Main, Settings, Statistics