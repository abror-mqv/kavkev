import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from "react-router-dom";
import placeholder from "../../placeholder.png"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const cartList = {
    minWidth: "100%"
}
const cardStyle = {
    display: "flex"
}

export const CartView = () => {
  const cart = useSelector((state) => state.cart);
  const products = cart.products[0]
  const Rend = <h3>{products?.author}</h3>
  let prodlist = products?.all_products
  console.log(prodlist)

  const renderList = prodlist?.map((product) => {
    const {
        name_product,
        general_price,
        quantity_product,
    } = product;

    return (
        <Card sx={{ minWidth: "100%" }}>
            <CardActionArea style={cardStyle}>
                <CardMedia
                    style={{
                        width: "20%",
                        height: "100%",
                    }}
                    component="img"
                    image={placeholder}
                    alt={name_product}
                />
                <CardContent style={{textAlign: "start", marginTop: "16px"}}>
                    <Typography gutterBottom variant="h5" component="div" style={{marginLeft: "16px"}}> 
                        {name_product}
                    </Typography>
                    <List dense={true}>
                        <ListItem>
                            <ListItemText
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
            <CardActions>
                <Button size="small" color="primary">
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    );
});

  return(
    <>
    <div style={cartList}>
     {renderList}
    </div>      
    </>

  )
}

