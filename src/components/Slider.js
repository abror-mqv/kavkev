import React from "react";
import Typography from "material-ui/styles/typography";
import { useTranslation } from "react-i18next";
import SwiperCore,{ Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css'; 

SwiperCore.use([Autoplay,Pagination,Navigation]);

export const ProfileSlider = () => {
    const { t, i18n } = useTranslation();
    const pro_obj = JSON.parse(localStorage.getItem("pro_obj"));
    const pro_contests = JSON.parse(localStorage.getItem("pro_contests"));

    

    return (
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            
            "disableOnInteraction": false
            }} pagination={{
            "clickable": true
            }} navigation={true} className="mySwiper">
            <h1>Hello</h1>    
            <h1>Hello</h1> 
            <h1>Hello</h1> 
            <h1>Hello</h1> 
            <h1>Hello</h1> 
        </Swiper>
    );
};
