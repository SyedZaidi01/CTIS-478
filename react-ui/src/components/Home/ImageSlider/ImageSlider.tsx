import React, { Component, useRef } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-elastic-carousel";




export default class ImageSlider extends Component {
  state = {
    height: 0,
    width: 0,
  };


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  getElementsToDisplay = (windowWidth) => {
    if (windowWidth <= 768) {
      return 1;
    } else {
      return 5;
    }
  };
  

  render() {

    return (
      <Container>
        <Carousel
          itemsToShow={this.getElementsToDisplay(this.state.width)}
          pagination={false}
          enableAutoPlay={true}
          className={"image-slider"}
          autoPlaySpeed={3500} // same time

        >
          <div>
            <img
              src="./images/referances/turkcell-logo.png"
              alt=""
              style={{ width: 150 }}
            />
          </div>
          <div>
            <img
              src="./images/referances/enerjisa-logo.png"
              alt=""
              style={{ width: 150 }}
            />
          </div>
          <div>
            <img
              src="./images/referances/player-bros-logo.png"
              alt=""
              style={{ width: 150 }}
            />
          </div>
          <div>
            <img
              src="./images/referances/bip-logo.png"
              alt=""
              style={{ width: 150 }}
            />
          </div>
          <div>
            <img
              src="./images/referances/tv-plus-logo.png"
              alt=""
              style={{ width: 150 }}
            />
          </div>
          <div>
            <img
              src="./images/referances/fizy-logo.png"
              alt=""
              style={{ width: 150 }}
            />
          </div>
          <div>
            <img
              src="./images/referances/topaz-logo.png"
              alt=""
              style={{ width: 150 }}
            />
          </div>
        </Carousel>
      </Container>
    );
  }
}
