import Page from  '../../core/tamplates/pageAbstract';

class MainPage extends Page{
  // private container: HTMLElement;
  static TextObject = {
    MainTitle: 'Main Page'
  }

  constructor(id: string) {
    // // we should pass the ID to 'container' so as to your pages have different from each other
    // this.container= document.createElement('div');
    // // assignment ID to 'container'/its the same ID that will be pass to constructor
    // this.container.id = id;
    super(id)
  }
  // // this method will create a title for our page
  // private createHeaderTitle(text: string) {
  //   const headerTitle = document.createElement('h1');
  //   headerTitle.innerText = text;
  //   return headerTitle;
  // }

// 'render' will return HTMLElement on the main page/reflecting 'title' on the page
  render(): HTMLElement {
    // we need pass some text to this method/call static obj/Class.Static object.Property:MainPage.TextObject.MainTitle
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    // adding 'title' to the 'container'
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;