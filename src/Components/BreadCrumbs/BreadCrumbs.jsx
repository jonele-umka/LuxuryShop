import React from "react";
import styles from './BreadCrumbs.module.css'
import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
  const { routes } = props;

  return (
    <nav aria-label={styles.breadCrumbNav}>
      <ul className={styles.breadCrumb}>
        {routes.map((route, index) => {
          const isLast = index === routes.length - 1;
          const link = isLast ? (
            <li
              key={route.label}
              className={styles.breadCrumb_item + ' ' + styles.active}
              aria-current="page"
            >
              {route.label}
            </li>
          ) : (
            <li key={route.label} className={styles.breadCrumbItem}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          );

          return link;
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
