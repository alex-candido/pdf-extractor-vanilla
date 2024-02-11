import FooterHtml from "./html/footer.html?raw";

export const FooterComponentName = 'footer-component';

export default class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = FooterHtml
  }

  init() {
    return this;
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define(FooterComponentName, FooterComponent);
}
