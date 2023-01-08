import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../Home/Home.css";

import po2 from "../../assets/images/po2.webp";
import po1 from "../../assets/images/po1.webp";
import virs from "../../assets/images/virs.png";
import hert from "../../assets/images/hert.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Carosuel = () => {
  return (
    <div className="App" style={{ marginRight: "70px" }}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={false}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="carousel-item-padding-40-px"
        style={{ marginTop: "5%" }}
      >
        <div
          style={{
            marginLeft: "9%",
            position: "absolute",
            marginRight: "10%",
            height: "400px",
            marginBottom: "5%",
          }}
        >
          <img
            style={{ position: "absolute", marginTop: "10%", marginLeft: "6%" }}
            src={hert}
            alt="heart"
          />
          <p
            style={{
              position: "absolute",
              color: "white",
              fontSize: "10px",
              fontWeight: "500",
              marginTop: "15%",
              marginLeft: "5%",
            }}
          >
            Health Insurance
          </p>
          <p
            style={{
              position: "absolute",
              marginTop: "25%",
              fontSize: "22px",
              width: "200px",
              color: "white",
              fontWeight: "500",
              marginLeft: "5%",
              fontFamily: "Roboto",
            }}
          >
            Protect yourself & your family against <strong>Covid-19</strong>
          </p>
          <img
            style={{ position: "absolute", marginLeft: "80%", marginTop: "5%" }}
            src={virs}
            alt="virus"
          />
          <img
            src={po2}
            style={{
              backgroundColor: "#7080FA",
              width: "368px",
              height: "185px",
              borderRadius: "15px",
            }}
            alt="blue"
          />
        </div>
        <div style={{ marginLeft: "10%", position: "absolute" }}>
          <img
            style={{ position: "absolute", marginTop: "10%", marginLeft: "6%" }}
            src={hert}
            alt="heart"
          />
          <p
            style={{
              position: "absolute",
              color: "white",
              fontSize: "10px",
              fontWeight: "500",
              marginTop: "15%",
              marginLeft: "5%",
            }}
          >
            Investment Plans
          </p>
          <p
            style={{
              position: "absolute",
              marginTop: "25%",
              fontSize: "22px",
              width: "200px",
              color: "white",
              fontWeight: "500",
              marginLeft: "5%",
              fontFamily: "Roboto",
            }}
          >
            Invest ₹10k and Get <strong>₹1 Crore</strong> return*{" "}
          </p>
          <img
            style={{ position: "absolute", marginLeft: "80%", marginTop: "5%" }}
            src={virs}
            alt="virus"
          />
          <img
            src={po1}
            style={{
              backgroundColor: "#4FDC95",
              width: "368px",
              height: "185px",
              borderRadius: "15px",
              marginRight: "2%",
            }}
            alt="blue"
          />
        </div>
        <div style={{ marginLeft: "10%", position: "absolute" }}>
          <img
            style={{ position: "absolute", marginTop: "10%", marginLeft: "6%" }}
            src={hert}
            alt="heart"
          />
          <p
            style={{
              position: "absolute",
              color: "white",
              fontSize: "10px",
              fontWeight: "500",
              marginTop: "15%",
              marginLeft: "5%",
            }}
          >
            Home Insurance
          </p>
          <p
            style={{
              position: "absolute",
              marginTop: "25%",
              fontSize: "22px",
              width: "200px",
              color: "white",
              fontWeight: "500",
              marginLeft: "5%",
              fontFamily: "Roboto",
            }}
          >
            <strong>₹50 Lakh Cover</strong> for Your Home Insurance at Just{" "}
            <strong>₹80/month*</strong>{" "}
          </p>
          <img
            style={{ position: "absolute", marginLeft: "80%", marginTop: "5%" }}
            src={virs}
            alt="virus"
          />
          <img
            src={po2}
            style={{
              backgroundColor: "#3CBBDA",
              width: "368px",
              height: "185px",
              borderRadius: "15px",
            }}
            alt="blue"
          />
        </div>
        <div style={{ marginRight: "14%", marginLeft: "10%" }}>
          <img
            style={{ position: "absolute", marginTop: "10%", marginLeft: "6%" }}
            src={hert}
            alt="heart"
          />
          <p
            style={{
              position: "absolute",
              color: "white",
              fontSize: "10px",
              fontWeight: "500",
              marginTop: "15%",
              marginLeft: "5%",
            }}
          >
            AskPB
          </p>
          <p
            style={{
              position: "absolute",
              marginTop: "25%",
              fontSize: "22px",
              width: "200px",
              color: "white",
              fontWeight: "500",
              marginLeft: "5%",
              fontFamily: "Roboto",
            }}
          >
            Got a <strong>question about insurance?</strong> Write to us
          </p>
          <img
            style={{ position: "absolute", marginLeft: "60%", marginTop: "5%" }}
            src={virs}
            alt="virus"
          />
          <img
            src={po2}
            style={{
              backgroundColor: "#FF9898",
              width: "368px",
              height: "195px",
              borderRadius: "15px",
            }}
            alt="blue"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carosuel;
