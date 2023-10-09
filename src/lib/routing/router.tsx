import { createHistoryRouter, createRouterControls } from "atomic-router";
import { createBrowserHistory } from "history";
import { CssAnimationsPage } from "../../pages/css-animations";
import { CssTransitionPage } from "../../pages/css-transition";
import { FramerPage } from "../../pages/framer";
import { HomePage } from "../../pages/home";
import { IdlePage } from '../../pages/idle';
import { LottiePage } from '../../pages/lottie';
import { SpringPage } from '../../pages/spring';
import { TransformPage } from '../../pages/transform';
import { flatRoutes } from './lib';

export const controls = createRouterControls();

export const routes = flatRoutes([
  { path: '/', route: [HomePage.route] },
  { path: '/css-transitions', route: [CssTransitionPage.route] },
  { path: '/css-animations', route: [CssAnimationsPage.route] },
  { path: '/transform', route: [TransformPage.route] },
  { path: '/framer', route: [FramerPage.route] },
  { path: '/spring', route: [SpringPage.route] },
  { path: '/lottie', route: [LottiePage.route] },
  { path: '/idle', route: [IdlePage.route] },
]);
export const history = createBrowserHistory();

export const router = createHistoryRouter({
  routes,
  controls,
});

router.setHistory(history);
