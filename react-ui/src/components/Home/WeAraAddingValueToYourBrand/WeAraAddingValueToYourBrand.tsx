import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import Widget from "../../Common/Widget";

const WeAraAddingValueToYourBrand = ({t}) => {
  return (
    <div className="container" id="waavtyb-section-custom">
      <Row>
        <Col md={4}>
          <h4>{t.addingValue}</h4>
          <Image className="serkanGenc" src="./images/projectImages/serkan.jpg"/>
          {/* <h1>{t.addingValueToBrand}</h1> */}
        </Col>

        <Col md={{ offset: 2, span: 6 }}>
          <p>
            {t.pointoOffer}
          </p>
          <Image className="brain-serkan" src="./images/yapay-zeka-ile-veri-analitigi-nedir-ne-degildir.jpg"/>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} lg={3} className="icon" id="adding-value-container">
          <Image src="./images/icon-1.svg" />
          <h2 className="icon-header">{t.makeTechnology}</h2>
          <p>
            {t.weOfferSuitable}
          </p>
        </Col>

        <Col xs={12} md={6} lg={3} className="icon" id="adding-value-container">
          <Image src="./images/icon-4.svg" />
          <h2 className="icon-header">{t.weDesign}</h2>
          <p>
            {t.pointoAnalyzes}
          </p>
        </Col>

        <Col xs={12} md={6} lg={3} className="icon" id="adding-value-container">
          <Image src="./images/icon-2.svg" />
          <h2 className="icon-header">{t.solutionApproached}</h2>
          <p>
            {t.weAddValue}
          </p>
        </Col>

        <Col xs={12} md={6} lg={3} className="icon" id="adding-value-container">
          <Image src="./images/icon-3.svg" />
          <h2 className="icon-header">{t.weSupport}</h2>
          <p>{t.available247}</p>
        </Col>
      </Row>
    </div>
  );
};

export default WeAraAddingValueToYourBrand;
