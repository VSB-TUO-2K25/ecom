import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Watch from "../../assets/images/watch.jpg"
import Shoe from "../../assets/images/shoe.jpg"
import Kid from "../../assets/images/kid.jpg"
import Offer from "../../assets/images/offer.jpg"
import Women from "../../assets/images/women.avif"

function HomeBanner() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000, 
    };
    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                 <div className="item">
                    <img src={Offer} alt="offer" className="w-100" />
                </div>
                <div className="item">
                    <img src={Women} alt="women" className="w-100" />
                </div>
                <div className="item">
                    <img src={Kid} alt="kid" className="w-100" />
                </div>
                <div className="item">
                    <img src={Shoe} alt="shoe" className="w-100" />
                </div>
                <div className="item">
                    <img src={Watch} alt="watch" className="w-100" />
                </div>
            </Slider>
        </div>
    );
}
export default HomeBanner;