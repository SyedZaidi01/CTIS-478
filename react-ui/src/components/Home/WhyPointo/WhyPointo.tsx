import { url } from "inspector";
import React from "react";
import Widget from "../../Common/Widget";
import { Button, Col, Image, Row } from "react-bootstrap";

const WhyPointo = ({t}) => {
  return (
    <Widget id="why-pointo" dark>
      <div className="container">
        <Row>
          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            md={{ span: 6, offset: 3 }}
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
            className="why-pointo-image-container"
          >
            <Image src="/images/vector-smart-object.png" id="paper-plane" />
          </Col>

          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 12, offset: 0 }}
            md={{}}
            lg={{ span: 7, offset: 0 }}
            xl={{ span: 6, offset: 1 }}
          >
            <Row>
              <Col
                xs={{}}
                sm={{}}
                md={{ span: 6 }}
                xl={{ span: 7 }}
                lg={{ span: 11, offset: 0 }}
              >
                <h5>{t.whyPointo}</h5>
                <h1>{t.kaliteGuvenVizyon}...</h1>
              </Col>
            </Row>
            <Row>
              <Col
                xs={{}}
                sm={{}}
                md={{}}
                xl={{ span: 12 }}
                lg={{ span: 12, offset: 0 }}
              >
                <p>
                  {t.insistingOnTraditional}
                </p>
              </Col>
            </Row>

            <Row>
              <Col
                md={{ span: 3, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 6, offset: 2 }}
                xl={{ span: 4, offset: 0 }}
                lg={{ span: 4, offset: 0 }}
                className="why-pointo-icon-col"
              >
                <div className="icon-container">
                  <div className="image-container">
                    <Image className="icon" src="./icons/gem.png" />
                  </div>
                  <span>{t.productivity}</span>
                </div>
              </Col>

              <Col
                md={{ span: 3, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 6, offset: 2 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                className="why-pointo-icon-col"
              >
                <div className="icon-container">
                  <div className="image-container">
                    <Image className="icon" src="./icons/cup.png" />
                  </div>
                  <span>{t.flexibility}</span>
                </div>
              </Col>

              <Col
                md={{ span: 3, offset: 0 }}
                sm={{ span: 4, offset: 0 }}
                xs={{ span: 6, offset: 2 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                className="why-pointo-icon-col"
              >
                <div className="icon-container">
                  <div className="image-container">
                    <Image className="icon" src="./icons/rocket.png" />
                  </div>
                  <span>{t.profitability}</span>
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col
                xs={{ offset: 0 }}
                sm={{ offset: 0 }}
                md={{ offset: 0 }}
                xl={{ span: 12, offset: 0 }}
                lg={{ span: 12, offset: 0 }}
              >
                <p>
                  {t.pointoDevelops}
                </p>
              </Col>
            </Row>

            <Row>
              <Col
                xs={{ offset: 0 }}
                sm={{ offset: 4 }}
                md={{ span: 3, offset: 4 }}
                xl={{ offset: 0 }}
                lg={{ offset: 0 }}
              >
                <Button href="/kurumsal" className="btn btn-lg btn-pointo-dark">
                  <span>{t.aboutUs}</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Widget>
  );
};

export default WhyPointo;
