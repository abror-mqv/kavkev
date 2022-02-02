import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router-dom";
import placeholder from "../placeholder.png";
import { useState, useEffect } from "react";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { FreeMode } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import { EffectCoverflow } from "swiper";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

const ProductComponent = () => {
    const history = useHistory();
    const products = useSelector((state) => state.allProducts.products);
    const { height, width } = useWindowDimensions();

    const renderList = products.map((product) => {
        const { id, category, image } = product;

        const cardClick = () => {
            history.push(`/shop/${id}`);
        };

        return (
            <SwiperSlide>
                <Card sx={{}}>
                    <CardActionArea onClick={cardClick}>
                        <CardMedia
                            component="img"
                            image={image}
                            alt={category}
                        />
                        <CardContent
                            style={{ textAlign: "start", marginTop: "16px" }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {category}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary" onClick={cardClick}>
                        Подробнее
                    </Button>
                </CardActions>
                </Card>
            </SwiperSlide>
        );
    });
    return (
        <>
            {width >= 720 ? (
                <Swiper
                    slidesPerView={3}
                    spaceBetween={"4%"}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {renderList}
                </Swiper>
            ) : (
                 renderList 
            )}
        </>
    );
};

export default ProductComponent;
