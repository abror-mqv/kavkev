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
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import cartIcon from "../trolley.png";
import { Helmet } from "react-helmet-async";

export const Prods = () => {
    const history = useHistory();
    const { categoryId } = useParams();
    const products = useSelector((state) =>
        state.allProducts.products.find((x) => x.id == categoryId)
    );
    const descriprion = `${products?.category} от Kav&Kev. Выберите и закажите партию продуктов онлайн! `

    console.log(products);

    const renderList = products?.products.map((product) => {
        const {
            id,
            name_product,
            price,
            amount,
            composition,
            raiting_general,
            image,
        } = product;

        const cardClick = () => {
            history.push(`/shop/product/${id}`);
        };

        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={cardClick}>
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
                <CardActions>
                    <Button size="small" color="primary" onClick={cardClick}>
                        Подробнее
                    </Button>
                </CardActions>
            </Card>
        );
    });

    return (
        <>
            <Helmet>
                <title>
                  {products?.category}
                </title>
                <meta
                    name="description"
                    content={descriprion}
                />
                <link rel="canonical" href="/shop" />
            </Helmet>
            {renderList}
        </>
    );
};
