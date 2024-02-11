
import SectionHeroHtml from "./html/section-hero.html?raw";

export const SectionHeroName = 'section-hero';

export default class SectionHero extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = SectionHeroHtml
  }

  init() {
    return this;
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define(SectionHeroName, SectionHero);
}
