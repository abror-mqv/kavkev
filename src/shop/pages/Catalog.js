import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from "react-router-dom";
import placeholder from "../placeholder.png"


const ProductComponent = () => {
  const history = useHistory();
  const products = useSelector((state) => state.allProducts.products);



  const renderList = products.map((product) => {
    const { id, category } = product;

    const cardClick = () => {
      history.push(`/shop/${id}`)
    }

    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={cardClick}>
        <CardMedia
          component="img"
          image={placeholder}
          alt={category}
        />
        <CardContent style={{textAlign: "start", marginTop: "16px"}}>
          <Typography gutterBottom variant="h5" component="div">
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
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
