import React, { Fragment, useEffect, useState } from "react";
// import Image from "next/image";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import Logo from "../../../Common/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEye } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";


import en from "../locales/en.json";
import tr from "../locales/tr.json";

const TopStickyMenu = ({ isSticky }) => {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  // const node = ReactDOM.findDOMNode(this);
  useEffect(() => {
    const topBar = Array.from(
      document.getElementsByClassName(
        "navbar-collapse"
      ) as HTMLCollectionOf<HTMLElement>
    );
    const topLogo = Array.from(
      document.getElementsByClassName(
        "navbar-brand"
      ) as HTMLCollectionOf<HTMLElement>
    );

    console.log(topBar[0].style.display);
    if (topBar[0].style.display === "") {
      topLogo[0].style.justifyContent = "center";
    }
  });

  return (

    
    <Navbar
      className="sidebar"
      expand="lg"
      sticky="top"
      style={
        isSticky
          ? { position: "fixed", backgroundColor: "#fff", marginTop:"0px" }
          : { position: "absolute" }
      }
    >
      <div className="container top-sticky-bar">
        <Navbar.Brand>
          <Link href="/">
            <a>
              {!isSticky ? (
                <Logo
                  isLight={!isSticky}
                  id="logo"
                  // width="160px"
                  height="50px"
                />
              ) : (
                <Logo
                  isLight={!isSticky}
                  id="logo"
                  // width="160px"
                  height="50px"
                />
              )}
            </a>
          </Link>
        </Navbar.Brand>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          height={600}
        ></Sidebar>

        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ width: "100%" }} className="mr-auto">
            <ul
              className="sticky-menu-list"
              style={isSticky ? { background: "" } : { background: "" }}
            >
              <Link href="/contact">
                <li style={isSticky ? { color: "#2f3d5a" } : { color: "#fff" }}>
                  {t.contact}
                  <span></span>
                </li>
              </Link>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default TopStickyMenu;
