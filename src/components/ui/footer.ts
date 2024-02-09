import Footer from "./footer.html?raw";

export const FooterComponentName = 'footer-component';

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = Footer
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define(FooterComponentName, FooterComponent);
}
