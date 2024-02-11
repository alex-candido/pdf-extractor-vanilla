// ui
import './ui/card.ts';

import FooterComponent from './ui/footer.ts';
import NavbarComponent from './ui/navbar.ts';

const footerComponent = new FooterComponent()
footerComponent.init()

const navbarComponent = new NavbarComponent("[link-nav-home]")
navbarComponent.init()

// sections
import SectionHero from './sections/section-hero.ts';
import SectionStart from './sections/section-start.ts';

const sectionHero = new SectionHero()
sectionHero.init()

const sectionStart = new SectionStart()
sectionStart.init()
