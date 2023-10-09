import { createRoute } from "atomic-router";
import { Link } from "atomic-router-react";
import { clsx } from "clsx";
import styles from './styles.module.scss';

const Transform = () => (
  <div>
    <Link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z"
          fill="#567FEA"
        />
      </svg>
    </Link>
    <h1>Transform</h1>

    <div className={clsx(styles.translate, styles.block)}>
      <h2>translate (x, y)</h2>
      <div className={styles.translate__content}>translate</div>
    </div>
    <div className={clsx(styles.scale, styles.block)}>
      <h2>scale (x, y)</h2>
      <div className={styles.scale__content}>scale</div>
    </div>
    <div className={clsx(styles.rotate, styles.block)}>
      <h2>rotate (90deg)</h2>
      <div className={styles.rotate__content}>rotate</div>
    </div>
    <div className={clsx(styles.skew, styles.block)}>
      <h2>skew (90deg, 90deg)</h2>
      <div className={styles.skew__content}>skew</div>
    </div>
    <div className={clsx(styles.matrix, styles.block)}>
      <h2>matrix (a, c, b, d, x, y)</h2>
      <div className={styles.matrix__content}>matrix</div>
    </div>
    <div className={clsx(styles.transformOrigin, styles.block)}>
      <h2>transform-origin (x, y)</h2>
      <div className={styles.transformOrigin__content}>transform origin</div>
    </div>
  </div>
);

export const TransformRoute = createRoute();
export const TransformPage = { view: Transform, route: TransformRoute };
