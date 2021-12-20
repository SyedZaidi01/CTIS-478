import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
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
        </div>
    );
}