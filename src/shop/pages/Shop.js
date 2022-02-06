import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import Catalog from "./Catalog";
import Typography from "@mui/material/Typography";
import cartIcon from "../trolley.png";
import Link from "@mui/material/Link";
import {Helmet} from 'react-helmet-async'

export const Shop = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("http://kavkev.kg:8080/api/category")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    var keywords = `kavkev, kev kev, кавкев, кав кев, сендвичи, сендвичи кав кев, сыры, сендвичи бишкек, бишкек`

    return (
        <>
            <Helmet>
                <title>Kav&kev || Интернет-Магазин || Категории товаров</title>
                <meta name="description" content="Оптовый Интернет-магазин продукции от Kav&Kev. Выберите и закажите партию продуктов онлайн!"/>
                <link rel="canonical" href="/shop"/>
                <meta name="keywords" content={keywords} />
            </Helmet>

            {localStorage.userToken ? (
                <Link href="/shop/cart" className="cartLink" style={{ }}>
                    <img alt="в корзину" src={cartIcon}></img>
                </Link>
            ) : (
                <></>
            )}

            <Typography
                component="h2"
                variant="h3"
                style={{ marginTop: "70px" }}
            >
                Категории продуктов
            </Typography>
            <div className="ShopContainer" style={{
                minHeiht: "100%"
            }}>
                <Catalog />
            </div>
        </>
    );
};
