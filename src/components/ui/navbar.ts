import NavbarHtml from "./html/navbar.html?raw";

export const NavbarComponentName = 'navbar-component';

export default class NavbarComponent extends HTMLElement {
  static linkNavHome: any;

  constructor(linkNavHome: string) {
    super();
    this.innerHTML = NavbarHtml
    NavbarComponent.linkNavHome = document.querySelector(linkNavHome)
  }

  navigateTo() {
    const route: any = NavbarComponent.linkNavHome.getAttribute('link-nav-home')
  }

  addClickEvent() {
    NavbarComponent.linkNavHome.addEventListener('click', () => this.navigateTo());
  }

  init() {
    if (NavbarComponent.linkNavHome) {
      this.addClickEvent()
    }
    return this;
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define(NavbarComponentName, NavbarComponent);
}
