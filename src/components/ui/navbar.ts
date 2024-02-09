import Navbar from "./navbar.html?raw";

export const NavbarComponentName = 'navbar-component';

class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = Navbar
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define(NavbarComponentName, NavbarComponent);
}


// <div class="navbar bg-neutral text-neutral-content">
          
//         </div>