/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./NavigationMenu.module.css";

const NavigationButton = ({ icon, isActive }) => {
  console.log(icon,'icon')
  return (
    <button
      className={`${styles.navButton} ${isActive ? styles.active : ""}`}
      aria-label={icon}
    >
      <img src={icon} alt="icons" />
    </button>
  );
};

export default NavigationButton;
