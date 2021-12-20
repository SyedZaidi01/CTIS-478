import React from "react";
import Logo from "../../Common/Logo";
import { Col, Container, Form, Row } from "react-bootstrap";

import FooterWhoAreWeColumn from "./FooterWhoAreWeColumn";
import FooterAddressColumn from "./FooterAddressColumn";
import FooterContactColumn from "./FooterContactColumn";
import FooterNavigationColumn from "./FooterNavigationColumn";
import Link from "next/link";

import en from "./locales/en.json";
import tr from "./locales/tr.json";
import { useRouter } from "next/router";

const Footer = () => {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <footer className="footer">
      <div className="container">
        <Container
          fluid
          style={{ textAlign: "center" }}
          id="footer-logo-section"
        >
          <Link href="/">
            <Logo isLight={true} width="138px" height="44px" />
          </Link>
        </Container>

        <Container fluid id="information-section" className="row">
          <FooterWhoAreWeColumn t={t}/>

          {/* <FooterNavigationColumn t={t}/> */}

          <FooterContactColumn t={t}/>
          {/* <FooterAddressColumn t={t}/> */}

          
        </Container>

        <Container fluid id="copy-right-section">
          Copyright © 2020 - All Rights Reserved
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
