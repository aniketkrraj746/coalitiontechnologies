// import React, { useState } from "react";
// import HoverCarousel from "hover-carousel";
import image3 from "../assets/carousel/image3.png";
import image2 from "../assets/carousel/image2.png";
import peak from "../assets/peak.png";
// import image3 from '.'
import "./History.css";
// import "swiper/css";
// import "swiper/css/pagination";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const History = () => {



  return (
    <div className="HistoryPage" id="History">
      <div className="peakimage">
        <img src={peak} alt="peak" id="peakImage" />
        <div className="history-text">
          <h2>01 </h2>
          <div className="history-word">
            <h3>History</h3>
            <div className="box"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="carousal">
          <Carousel
            infiniteLoop={true}
            width="25%"
            swipeable={true}
            emulateTouch={true}
            showStatus={true}
            showThumbs={true}
            // showIndicators={false}
            // centerMode={true}
            // centerSlidePercentage="50%"
          >
            <div>
              <img src={image2} />
            </div>
            <div>
              <img src={image3} />
            </div>
            <div>
              <img src={image2} />
            </div>
            <div>
              <img src={image3} />
            </div>
            <div>
              <img src={image2}/>
            </div>
          </Carousel>
          
        </div>
      </div>
    </div>
  );
};

export default History;
