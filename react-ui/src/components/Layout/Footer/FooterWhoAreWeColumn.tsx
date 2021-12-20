import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";
import SocialMediaIcons from "../../Common/SocialMediaIcons";

const FooterWhoAreWeColumn = ({t}) => {
  return (
    <Col md={{span:5}}   style={{marginBottom:"15px"}}>

      <Image className="coding-image" src="./images/projectImages/coding.gif"/>


      <br />

      <SocialMediaIcons size="2x" />
    </Col>
  );
};

export default FooterWhoAreWeColumn;
