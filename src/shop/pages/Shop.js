import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import Catalog from "./Catalog";
import Typography from '@mui/material/Typography';

export const Shop = () => {
//  const products = useSelector((state) => state.allProducts.products);
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
    <Typography component="h2" variant="h3" style={{marginTop: "70px"}}>Категории продуктов</Typography>
    <div className="ShopContainer">
      <Catalog />
    </div>
    </>
  );
};

