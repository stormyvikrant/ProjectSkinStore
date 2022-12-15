import React, { Component } from "react";
import Slider from "react-slick";
// import ProductCard1 from "./ProductCard1";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brandslider.css";
import BrandCard from "./BrandCard";

class BrandSlider extends Component {
  constructor() {
    super();
    this.state = {
      branddata: [
        {
          img: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12741973-8954986062768091.jpg",
          productdetail:"Chantecaille The Ultimate Lifting Duo (Worth $625.00)",
             discountmessage:"25% off with code REPLAY",
             price:"$550"
        
        },
        {
          img: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12658446-2894971372229173.jpg",
          productdetail:"Eve Lom Decadent Double  Holiday Set 2022 (Worth $235.00)",
             discountmessage:"25% off with code REPLAY",
             price:"$350"
        },
        {
          img: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13883317-8014988987514489.jpg",
          productdetail:"Elemis Cleanse and Pro-Collagen Tale Set (Worth $165.00)",
             discountmessage:"25% off with code REPLAY",
             price:"$250"
        },
        {
          img: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13903619-1444998250558359.jpg",
          productdetail:"Molton Brown Festive Bauble Gift Set",
             discountmessage:"25% off with code REPLAY",
             price:"$350"
        },
        {
          img: "https://static.thcdn.com/images/xsmall/webp//productimg/original/13953408-7464994956261674.jpg",
          productdetail:"Medik8 A Winter's Night Kit",
             discountmessage:"25% off with code REPLAY",
             price:"$450"
        },
        {
          img: "https://static.thcdn.com/images/xsmall/webp//productimg/original/13973773-1724997258190192.jpg",
          productdetail:"U Beauty The Resurfacing Holiday Set (Worth $316.00)",
             discountmessage:"25% off with code REPLAY",
             price:"$150"
        },
        {
          img: "https://static.thcdn.com/images/xsmall/webp//productimg/original/11637470-2944864614490653.jpg",
          productdetail:"T3 Volume 2.5 Round Brush",
             discountmessage:"25% off with code REPLAY",
             price:"$50"
        },
        {
          img: "https://static.thcdn.com/images/xsmall/webp//productimg/original/12903729-5714884454997658.jpg",
          productdetail:"Obagi Clinical Kinetin+ Hydrating Cream 1.7 fl. oz",
             discountmessage:"25% off with code REPLAY",
             price:"$250"
        },
        {
          img: "https://static.thcdn.com/images/xsmall/webp//productimg/original/11288823-1724904688328701.jpg",
          productdetail:"NEST New York Bamboo Reed Diffuser 175ml",
             discountmessage:"25% off with code REPLAY",
             price:"$850"
        },
        {
          img: "https://static.thcdn.com/images/xsmall/webp//productimg/original/13966971-1414998593602041.jpg",
          productdetail:"Medik8 A Winter's Day Kit",
             discountmessage:"25% off with code REPLAY",
             price:"$550"
        }
      ]
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.branddata.map((slide, index) => {
            return (
              <div key={index}>
                <BrandCard imgSrc={slide.img} productdetail={slide.productdetail} discountmessage={slide.discountmessage} price={slide.price}/>
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default BrandSlider;
