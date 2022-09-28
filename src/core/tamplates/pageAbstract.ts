abstract class Page {
  protected container: HTMLElement;
  static TextObject = {};

  constructor(id: string) {
    // we should pass the ID to 'container' so as to your pages have different from each other
    this.container= document.createElement('div');
    // assignment ID to 'container'/its the same ID that will be pass to constructor
    this.container.id = id;
  }

  // this method will create a title for our page
  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    return headerTitle;
  }

  // 'render' will return HTMLElement on the main page/reflecting 'title' on the page
  render(): HTMLElement {
    return this.container;
  }
}

export default Page;