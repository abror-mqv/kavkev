import React, {useEffect} from 'react'
import MainContainer from "../../../components/MainContainer";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Link from "@mui/material/Link";
import Vector from '../../../media/Vector 36.png'

export const ShopChoseLogReg = () => {
    const history = useHistory();

    const buttonReg = () => {
        history.push("/shop/registration");
    };

    const buttonLog = () => {
        history.push("/shop/login");
    };

    

    return (
        <MainContainer>
            <Link href={`/shop`} className="back-arrow">
                <img alt="назад" src={Vector}></img>
            </Link>
            <Typography component="h3" variant="h4">
                Доступ к магазину доступен только зарегестрированным пользователям
            </Typography>
            <Button
                onClick={buttonReg}
                style={{ marginTop: "40px", width: "100%", height: "70px", fontSize: "22px" }}
                variant="contained"
                disableElevation
            >
                Зарегестрироваться 
            </Button>

            <Button
                onClick={buttonLog}
                style={{
                    marginTop: "40px",
                    backgroundColor: "green",
                    width: "100%" ,
                    height: "70px",
                    fontSize: "22px"
                }}
                variant="contained"
                disableElevation
            >
                Уже есть аккаунт (войти)
            </Button>
        </MainContainer>
    );
}