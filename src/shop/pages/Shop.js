import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import Catalog from "./Catalog";
import Typography from "@mui/material/Typography";
import cartIcon from "../trolley.png";
import Link from "@mui/material/Link";

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

    return (
        <>
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
            <div className="ShopContainer">
                <Catalog />
            </div>
        </>
    );
};
