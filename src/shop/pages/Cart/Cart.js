import react from 'react'
import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../redux/actions/productsActions";
import Typography from "@mui/material/Typography";
import {CartView} from "./CartView"

export const Cart = () => {
    //  const products = useSelector((state) => state.allProducts.products);
      const dispatch = useDispatch();
      const he = {
        headers: {
        Authorization: `Token ${localStorage.userToken}`,}
    }
      const fetchCart = async () => {
        const response = await axios
          .get("http://kavkev.kg:8080/api/my_cart/", he)
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(setCart(response.data));
        console.log(response.data)
      };
    
      useEffect(() => {
        fetchCart();
      }, []);
    
      return (
        <>
        <div className="ShopContainer">
          <CartView/>
        </div>
        </>
      );
    };
    
    