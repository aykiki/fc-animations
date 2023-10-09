import { Route } from "atomic-router-react";
import { CssAnimationsPage } from "../../pages/css-animations";
import { CssTransitionPage } from "../../pages/css-transition";
import { FramerPage } from "../../pages/framer";
import { HomePage } from "../../pages/home";
import { IdlePage } from '../../pages/idle';
import { LottiePage } from '../../pages/lottie';
import { SpringPage } from '../../pages/spring';
import { TransformPage } from '../../pages/transform';

export const Routes = () => (
  <>
    <Route {...CssTransitionPage} />
    <Route {...CssAnimationsPage} />
    <Route {...HomePage} />
    <Route {...TransformPage} />
    <Route {...FramerPage} />
    <Route {...SpringPage} />
    <Route {...LottiePage} />
    <Route {...IdlePage} />
  </>
);
