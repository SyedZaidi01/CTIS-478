import { faPhoneAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const FooterContactColumn = ({t}) => {
  return (
    <Col md={{span:4, offset:3}}>
      <h5>{t.contactUs}</h5>

      <p className="footer-email">
        {t.doYouHaveQuestion}
        <br />
        <Link href="mailto:info@pointo.com.tr">
          <span>
            <h6 style={{display: "inline-block"}}>sgenc@bilkent.edu.tr</h6>
          </span>
        </Link>
      </p>

      <h5>{t.telephone}</h5>
      <p className="footer-phone">
      <Link href={"tel:(+90-312) 290 52 26"}>
        <span>
          <FontAwesomeIcon icon={faPhoneAlt} size={"lg"} />
          <h6 style={{display: "inline-block"}}>(+90-312) 290 52 26</h6>
        </span>
      </Link>
      </p>

      <h5>{t.fax}</h5>
      <p className="footer-fax">
      <Link href={"tel:+90 (312) 290 50 58"}>
        <span>
          <FontAwesomeIcon icon={faPhoneAlt} size={"lg"} />
          <h6 style={{display: "inline-block"}}>+90 (312) 290 50 58</h6>
        </span>
      </Link>
      </p>

    </Col>
  );
};

export default FooterContactColumn;
