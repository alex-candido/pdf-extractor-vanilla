// views
import Views from '../views/index.ts';

interface RouteProps {
  [name: string]: string;
}

// routes
const routes: RouteProps = {
  "/": Views.HomeView,
  "/start": Views.StartView,
  "/about": Views.AboutView
};

document.querySelector<HTMLDivElement>("#page")!.innerHTML =
  routes[window.location.pathname];
