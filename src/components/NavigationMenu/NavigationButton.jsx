
import React from "react";
import styles from "./NavigationMenu.module.css";

const NavigationButton = ({ btnStyle, activeIcon, inactiveIcon, isActive }) => {
  const icon = isActive ? activeIcon : inactiveIcon;
  return (
    <button
      className={`${styles.navButton} ${btnStyle} ${isActive ? styles.active : styles.inactive}`}
      aria-label="Navigation Button"
    >
      <img
        src={icon}
        alt="navigation icon"
        className={styles.icon}
      />
    </button>
  );
};

export default NavigationButton;

