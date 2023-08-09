import React, { useState } from "react";
import HoverCarousel from "hover-carousel";
import image3 from "../assets/carousel/image3.png";
import image2 from "../assets/carousel/image2.png";
import peak from "../assets/peak.png";
// import image3 from '.'
import "./History.css";
// import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from "swiper/react";
// import Pagination from 'swiper/modules';
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const History = () => {
  const [style, setStyle] = useState("style4");

  const callImage = () => {
    setStyle("style4");
  };
  const callImage1 = () => {
    setStyle("style");
  };
  return (
    <div className="HistoryPage" id="History">
      <div className="peakimage">
        <img src={peak} alt="peak" id="peakImage" />
        <div className="carousal">
          <Carousel
            infiniteLoop={true}
            width="50%"
            swipeable={true}
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            // showIndicators={false}
            // centerMode={true}
            // centerSlidePercentage="50%"

          >
            <div>
              <img src={image2} width={100}/>
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
          </Carousel>
          <div className={style}></div>
          <div>
            <button type="text" autoFocus onClick={callImage}></button>
            <button type="text" onClick={callImage1}></button>
            <button type="text" onClick={callImage}></button>
            <button type="text" onClick={callImage1}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
