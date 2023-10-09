import { createRoute } from "atomic-router";
import { Link } from "atomic-router-react";
import styles from "./styles.module.scss";

const Home = () => (
  <div className={styles.home}>
    <h1>Animations</h1>
    <nav>
      <ul>
        <li>
          <Link to="/css-transitions">CSS transitions</Link>
        </li>
        <li>
          <Link to="/css-animations">CSS animations</Link>
        </li>
        <li>
          <Link to="/transform">Transform</Link>
        </li>
        <li>
          <Link to="/framer">Framer motion</Link>
        </li>
        <li>
          <Link to="/spring">Spring</Link>
        </li>
        <li>
          <Link to="/lottie">Lottie</Link>
        </li>
        <li>
          <Link to="/idle">Idle</Link>
        </li>
      </ul>
    </nav>
  </div>
);
export const HomeRoute = createRoute();
export const HomePage = { view: Home, route: HomeRoute };
