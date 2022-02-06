import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedProduct,
    removeSelectedProduct,
} from "../../redux/actions/productsActions";
import placeholder from "../placeholder.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async'

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Form from "../../components/Form";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { useData } from "../../DataContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import addSuccess from "../../media/add-to-basket.png";
import { makeStyles } from "@material-ui/core/styles";
import Vector from "../../media/Vector 36.png";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, 0, 0),
        top: "20px",
        fontSize: "24px",
        backgroundImage:
            "linear-gradient(93.26deg, #4E53FF 9.35%, #2B23BD 88.89%)",
    },
}));

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "600px",
    bgcolor: "white",
    display: "flex",
    flexDirection: "column",
    boxShadow: 24,
    paddingTop: 4,
    fontSize: "24px",
};

export const ProductDetail = () => {
    const styles = useStyles();
    const history = useHistory();
    const { data, setValues } = useData();
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { name_product, amount, composition, price, raiting_general, image } =
        product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`http://kavkev.kg:8080/api/product/${id}/`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        localStorage.setItem("prod_id", productId);
        setValues(data);
        localStorage.setItem("goodAmount", data.goodAmount);
        console.log(data);
        if (localStorage.userToken == null) {
            history.push("/shop/chose-log-reg");
        } else {
            setOpen(true);
            axios({
                method: "post",
                url: `http://api-kavkev.kg:8080/api/product/${productId}/cart/`,
                headers: {
                    Authorization: `Token ${localStorage.userToken}`,
                },
                data: {
                    amount: data.goodAmount,
                },
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const redToCart = () => {
        if (localStorage.userToken == null) {
            history.push("/shop/chose-log-reg");
        } else {
            history.push("../cart");
        }
    };
    const description = `${name_product} от Kav&Kev. Выберите и закажите партию продуктов онлайн! `
    var keywords = `${name_product}, kavkev, kev kev, кавкев, кав кев, ${name_product + "бишкек"}, сендвичи, сендвичи кав кев, сыры`

    return (
        <div className="ShopContainer" style={{ alignItems: "center" }}>
            <Helmet>
                <title>{name_product}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords}/>
                <link rel="canonical" href="/shop/product/:id" />
            </Helmet>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "20px",
                            width: "80%",
                            padding: "0 0px 0 30px",
                        }}
                    >
                        <span style={{ fontSize: "24px", lineHeight: 1.2 }}>
                            {data.goodAmount} товаров добавлено в корзину!
                        </span>
                        <img
                            src={addSuccess}
                            style={{ width: "70px", height: "70px" }}
                            alt="QR"
                        />
                    </div>
                    <Button
                        onClick={(close) => handleClose()}
                        variant="contained"
                        style={{
                            backgroundImage:
                                "linear-gradient(93.26deg, #4E53FF 9.35%, #2B23BD 88.89%%)",
                            width: "100%",
                            display: "block",
                            marginTop: "30px",
                            height: "70px",
                        }}
                    >
                        <Typography component="h4" variant="h4">
                            OK
                        </Typography>
                    </Button>
                </Box>
            </Modal>

            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <Card sx={{ maxWidth: "40vh" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={image}
                            alt={name_product}
                        />
                        <CardContent
                            style={{ textAlign: "start", marginTop: "16px" }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                style={{ marginLeft: "16px" }}
                            >
                                {name_product}
                            </Typography>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemText
                                        primary="Состав:"
                                        secondary={composition}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Цена"
                                        secondary={price + " сом"}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}
            <div>
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ maxWidth: 400, marginTop: -40 }}
                >
                    <Input
                        {...register("goodAmount", {
                            required: true,
                            maxLength: 40,
                        })}
                        style={{ marginBottom: "24px" }}
                        id="goodAmount"
                        type="number"
                        label="Количество товара"
                        name="goodAmount"
                        max={100}
                    />
                    <Button
                        className={styles.root}
                        style={{ position: "static" }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Добавить в корзину
                    </Button>
                    <Button
                        className={styles.root}
                        style={{ position: "static", marginTop: "24px" }}
                        type="reset"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={redToCart}
                    >
                        Перейти в корзину
                    </Button>
                </Form>
            </div>
        </div>
    );
};
