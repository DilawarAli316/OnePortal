/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./NavigationMenu.module.css";

const navigationItems = [
  { icon: "/assets/homeActive.svg", label: "/" },
  { icon: "/assets/CategoriesNotActive.svg", label: "/categories" },
  { icon: "/assets/KnowledgeNotActive.svg", label: "/services" },
  { icon: "/assets/messageNotActive.svg", label: "/teams" },
  { icon: "/assets/SupportNotActive.svg", label: "/add" },
];

const navigationItems2 = [
  { icon: "/assets/comments-question.svg", label: "/comments" },
  { icon: "/assets/life-ring.svg", label: "/support" },
];

const SideView = () => (
  <div className={styles.navigationMenu}>
    <Nav
      defaultActiveKey="/"
      style={{
        flexDirection: "column",
        display: "flex",
        height: "100%",
        justifyContent: "center",
      }}
    >
      {navigationItems.map((item, index) => (
        <Nav.Link href={item.label}>
          <img src={item.icon} alt="icon" />
        </Nav.Link>
      ))}
    </Nav>

    <Nav
      defaultActiveKey="/"
      style={{
        flexDirection: "column",
        display: "flex",
        height: "100%",
        justifyContent: "center",
      }}
    >
      {navigationItems2.map((item, index) => (
        <Nav.Link href={item.label}>
          <img src={item.icon} alt="icon" />
        </Nav.Link>
      ))}
    </Nav>
  </div>
);

export default SideView;
