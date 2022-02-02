import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router-dom";
import placeholder from "../../placeholder.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ImageZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const cartList = {
    width: "80%",
    height: "60%",
    overflow: "auto",
    height: "60vh",
    padding: "40px 0 40px 0",
    borderRadius: "25px 25px",
    boxShadow: "10px 10px 20px 4px rgba(0,0,0,0.58)",
};
const cardStyle = {
    display: "flex",
    justifyContent: "start",
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, 0, 0),
        top: "20px",
        fontSize: "24px",
        backgroundImage:
            "linear-gradient(93.26deg, #4E53FF 9.35%, #2B23BD 88.89%)",
    },
}));

export const CartView = () => {
    const history = useHistory()
    const styles = useStyles();
    const cart = useSelector((state) => state.cart);
    const products = cart.products[0];
    let prodlist = products?.all_products;
    const checkOut = () => {
        history.push('/shop/checkout')
    }



    const renderList = prodlist?.map((product) => {
        const { name_product, general_price, quantity_product, id_product, image } = product;
        const ChangeOrder = () => {
            history.push(`/shop/product/${id_product}`)
        }
        return (
            <Card
                sx={{ width: "80%" }}
                style={{
                    display: "flex",
                    boxShadow: "4px 4px 6px 4px rgba(0,0,0,0.28)",
                    marginBottom: "40px",
                    borderRadius: "25px 25px",
                    marginLeft: "10%",
                }}
                className="CartCard"
            >
                <CardActionArea style={cardStyle}>
                    <ImageZoom
                        style={{
                            borderBottomRightRadius: "10%",
                            borderTopRightRadius: "10%",
                            width: "25%",
                            maxHeight: "100%",
                        }}
                    >
                        <CardMedia
                            style={{}}
                            component="img"
                            image={image}
                            alt={name_product}
                            className="CartCard__image"
                        />
                    </ImageZoom>
                    <CardContent
                        style={{
                            textAlign: "start",
                            marginTop: "16px",
                            left: "0",
                            flexWrap: "wrap",
                            padding: 0,
                            marginLeft: "4%",
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h2"
                            component="h2"
                            style={{
                                marginLeft: "16px",
                                fontSize: "3vw",
                                wordWrap: "wrap",
                            }}
                        >
                            {name_product}
                        </Typography>
                        <List
                            dense={true}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                minWidth: "100px",
                            }}
                        >
                            <ListItem>
                                <ListItemText
                                    className="litem"
                                    primary="Количество:"
                                    secondary={quantity_product}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Цена за все:"
                                    secondary={general_price + " сом"}
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                </CardActionArea>
                <CardActions
                    style={{
                        backgroundImage:
                            "linear-gradient(93.26deg, #4E53FF 9.35%, #2B23BD 88.89%)",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        size="small"
                        color="primary"
                        style={{
                            color: "#fff",
                        }}
                        onClick={ChangeOrder}
                    >
                        Изменить
                    </Button>
                </CardActions>
            </Card>
        );
    });

    return (
        <>
            <div style={cartList}>
                {renderList}
                <Typography component="h4" variant="h5" style={{}}>
                    Итого: {products?.sum_price} сом
                </Typography>
            </div>
            <div
                style={{
                    width: "80%",
                    height: "40px",
                    marginTop: "-30px"
                }}
            >
                    <Button
                        className={styles.root}
                        style={{
                            borderRadius: "15px"
                        }}
                        type="reset"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={checkOut}
                    >
                        Оформить
                    </Button>
            </div>
        </>
    );
};
