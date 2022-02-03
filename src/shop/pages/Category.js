import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import { Prods } from "./Prods";
import Typography from "@mui/material/Typography";

import Vector from "../../media/Vector 36.png";
import Link from "@mui/material/Link";
import { useParams } from "react-router-dom";
import cartIcon from "../trolley.png";
import {Footer} from '../../components/Footer'


export const Category = () => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) =>
        state.allProducts.products.find((x) => x.id == categoryId)
    );
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
            <Typography component="h2" variant="h3" style={{marginTop: "70px"}}>{products?.category}</Typography>
            <div className="ShopContainer">
                <Link href="/shop/" className="back-arrow">
                    <img alt="назад" src={Vector}></img>
                </Link>
                {localStorage.userToken ? (
                <Link href="/shop/cart" className="cartLink">
                    <img alt="в корзину" src={cartIcon}></img>
                </Link>
            ) : (
                <></>
            )}
                <Prods />
            </div>
        </>
    );
};
