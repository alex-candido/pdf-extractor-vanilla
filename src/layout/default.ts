import { FooterComponentName } from "../components/ui/footer";
import { NavbarComponentName } from "../components/ui/navbar";

export const LayoutDefaultName = 'default-layout';

class DefaultLayout extends HTMLElement {
  constructor() {
    super();
    
    this.innerHTML = `
      <${NavbarComponentName}></${NavbarComponentName}>
      <main class="layout">
        <div id="page"></div>
      </main>
      <${FooterComponentName}></${FooterComponentName}>
    `;
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define(LayoutDefaultName, DefaultLayout);
}
