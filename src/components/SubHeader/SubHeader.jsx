import React from "react";
import Nav from "react-bootstrap/Nav";

const SubHeader = () => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: "20px 100px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p>text1</p>
      </div>
      <div>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              href="/"
              onClick={() => localStorage.setItem("SubHeader", true)}
            >
              Workspace
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/top-nav-team">Team</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="overview">Overview</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default SubHeader;
