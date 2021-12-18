import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { SmallInfo } from "../components/SmallInfo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import qr_img from "../media/qr-img.png";
// Core modules imports are same as usual
import { Pagination } from "swiper";
import SwiperCore, { Navigation } from "swiper";
import Link from '@mui/material/Link';
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Styles must use direct files imports
import "swiper/swiper.min.css";
// import { useTranslation } from 'react-i18next'

SwiperCore.use([Navigation]);


export const Profile = () => {
    // const { t, i18n } = useTranslation()

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: 24,
        paddingTop: 4,
    };

    const pro_obj = JSON.parse(localStorage.getItem("pro_obj"));
    const pro_contests = JSON.parse(localStorage.getItem("pro_contests"));
    const pro_tokens = JSON.parse(localStorage.getItem("pro_tokens"))
    const isToken = () => {
        if (typeof localStorage.token !== "undefined") {
            console.log("return true");
            return true;
        } else {
            console.log("return false");
            return false;
        }
    };

    const isTookView = () => {
        if (localStorage.isTook == 404) {
            return (
                <Typography component="h5" variant="h5">
                    Данный код был отсканирован ранее
                </Typography>
            );
        } else if (localStorage.isTook == 400) {
            console.log("kod limit bro soryan tak cho takie vot dela");
            return (
                <Typography component="h5" variant="h5">
                    Нельзя отсканировать более 3-х кодов в день
                </Typography>
            );
        } else {
            console.log("kod otskaniroven");
            return (
                <Typography component="h5" variant="h5">
                    QR-код успешно отсканирован
                </Typography>
            );
        }
    };

    const [open, setOpen] = React.useState(isToken);
    const handleClose = () => {
        localStorage.removeItem("token");
        setOpen(false);
    };
    const listItems = pro_tokens.map((number) =>  {
        return(
           <Typography component="p" variant="h6" style={{color: "green", fontSize: "14px"}}>{number.token}</Typography>
        )
    });

    return (
        <MainContainer style={{ paddingRight: 0, paddingLeft: 0 }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                        {isTookView()}
                        <img
                            src={qr_img}
                            style={{ width: "70px", height: "70px" }}
                            alt="QR"
                        />
                    </div>
                    <Button
                        onClick={(close) => handleClose()}
                        variant="contained"
                        style={{
                            backgroundImage:
                                "linear-gradient(108.73deg, #F9881F 23.73%, #F9881F 23.73%, #FF774C 79.34%)",
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
            <Typography component="h5" variant="h5">
                Добро пожаловать на страницу профиля,
            </Typography>
            <Typography component="h5" variant="h5">
                {pro_obj.first_name} {pro_obj.last_name}
            </Typography>
            <SmallInfo>
                <p>Отсканированно QR-кодов</p>
                <p>за сегодня:</p>
                {pro_obj.qr_in_day}
                <p>всего:</p>
                {pro_obj.qr_quantity}
            </SmallInfo>
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                    <Typography component="h6" variant="h6">
                        {pro_obj.which_contest.name_contest ? ('Сейчас ты можешь получить:') : ('')}
                        
                    </Typography>
                    <Typography component="h5" variant="h5">
                        {pro_obj.which_contest.name_contest}
                    </Typography>
                    <img
                        src={pro_obj.which_contest.image}
                        style={{ width: "100%" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Typography component="h6" variant="h6">
                        собери {pro_contests[1].need_qr}
                    </Typography>
                    <Typography component="h5" variant="h5">
                        {pro_contests[1].name_contest}
                    </Typography>
                    <img
                        src={pro_contests[1].image}
                        style={{ width: "100%" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Typography component="h6" variant="h6">
                    собери {pro_contests[2].need_qr}
                    </Typography>
                    <Typography component="h5" variant="h5">
                        {pro_contests[2].name_contest}
                    </Typography>
                    <img
                        src={pro_contests[2].image}
                        style={{ width: "100%", display: "block" }}
                    />
                </SwiperSlide>
            </Swiper>
            <Typography component="h5" variant="h5"> 
                Все твои коды:
                <p> </p>
                {listItems}
            </Typography>
            <Typography component="h5" variant="h6" style={{margin: "70px 0 0 0"}}> 
                {pro_obj.username}
            </Typography>
            <Typography component="h5" variant="h6" style={{margin: "70px 0 70px 0"}}> 
                <Link href="/about">Условия акции</Link>
            </Typography>

                        
            
        </MainContainer>
    );
};
