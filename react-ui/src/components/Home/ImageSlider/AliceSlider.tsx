import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container } from "react-bootstrap";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 5 },
};
const renderNextButton = () => {
  return (
    <p className="alice-carousel__prev-btn-item">
      <span data-area={<FontAwesomeIcon icon={faArrowRight} />}>
      </span>
    </p>
  );
};

const items = [
  <div data-value="1" className="item">
    <img
      src="./images/projectImages/AWS.png"
      alt=""
      style={{ width: 150 }}
    />
  </div>,
  <div data-value="2" className="item">
    <img
      src="./images/projectImages/CiscoNetworkingAcademy.png"
      alt=""
      style={{ width: 150 }}
    />
  </div>,
  <div data-value="3" className="item">
    <img
      src="./images/projectImages/HuaweiICTAcademy.png"
      alt=""
      style={{ width: 150 }}
    />
  </div>,
  <div data-value="4" className="item">
    <img src="./images/projectImages/MicrosoftImagine.png" alt="" style={{ width: 150 }} />
  </div>,
  <div data-value="5" className="item">
    <img
      src="./images/projectImages/nvidia.png"
      alt=""
      style={{ width: 150 }}
    />
  </div>,
  <div data-value="6" className="item">
    <img
      src="./images/projectImages/OracleAcademy.png"
      alt=""
      style={{ width: 150 }}
    />
  </div>,
  <div data-value="7" className="item">
    <img
      src="./images/projectImages/SAPUniversityAlliance.png"
      alt=""
      style={{ width: 150 }}
    />
  </div>,
];

const AliceSlider = () => {
  return (
    <Container>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        infinite={true}
        animationDuration={2000}
        autoPlay={true}
        disableDotsControls={true}
        // renderNextButton={renderNextButton}
        disableButtonsControls={true}
      />
    </Container>
  );
};
export default AliceSlider;
