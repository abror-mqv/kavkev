import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { SmallInfo } from "../components/SmallInfo";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import qr_img from "../media/qr-img.png";
import storeIcon from '../media/store.png'
import { useHistory } from 'react-router-dom';
import axios from "axios";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import {EffectCoverflow} from 'swiper'

import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";



SwiperCore.use([Autoplay,Pagination,Navigation]);

export const Profile = () => {
    const history = useHistory();
    if(localStorage.userToken === undefined){
        history.push("/chose-log-reg")
    }else{
        
    }

    const { t, i18n } = useTranslation();

    axios({
        method: "GET",
        url: "http://www.api-kavkev.kg:8080/api/profile/my/",
        headers: {
            Authorization: `Token ${localStorage.userToken}`,
                },
        data: {},
    })
    .then((res) => {
        console.log(res);
        console.log("Profile gotten")
        localStorage.setItem('pro_obj', JSON.stringify(res.data.profile));
        localStorage.setItem('pro_tokens', JSON.stringify(res.data.tokens));
        localStorage.setItem('pro_contests', JSON.stringify(res.data.contests));
    })
    .catch((error) => {
        console.log(error);
    });            
       

    const style = {
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
    };

    const pro_obj = JSON.parse(localStorage.getItem("pro_obj"));
    const pro_contests = JSON.parse(localStorage.getItem("pro_contests"));
    const pro_tokens = JSON.parse(localStorage.getItem("pro_tokens"));
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
                    {t("profile.invalid_code")}
                </Typography>
            );
        } else if (localStorage.isTook == 400) {
            console.log("kod limit bro soryan tak cho takie vot dela");
            return (
                <Typography component="h5" variant="h5">
                    {t("profile.code_limit")}
                </Typography>
            );
        } else {
            console.log("kod otskaniroven");
            return (
                <Typography component="h5" variant="h5">
                    {t("profile.code_success")}
                </Typography>
            );
        }
    };

    const [open, setOpen] = React.useState(isToken);
    const handleClose = () => {
        localStorage.removeItem("token");
        setOpen(false);
    };
    const isPrize = () => {
        if (pro_obj.which_contest.name_contest == "") {
            return false;
        } else {
            return true;
        }
    };
    console.log(isPrize());

    const currentContest = () => {
        if (isPrize() == false) {
            return (
                <SwiperSlide>
                    <Typography component="h6" variant="h6">
                        {t("profile.scan_more")}
                        {pro_contests[0].need_qr - pro_obj.qr_quantity}{" "}
                        {t("profile.scan_n_get")}
                    </Typography>
                    <Typography component="h5" variant="h5">
                        {pro_contests[0].name_contest}
                    </Typography>
                    <img
                        src={pro_contests[0].image}
                        style={{ width: "100%", display: "block" }}
                    />
                </SwiperSlide>
            );
        } else if (isPrize() == true) {
            return (
                <SwiperSlide >
                    <Typography component="h6" variant="h6" styles={{marginTop: "6px"}}>
                        {t("profile.get_current")}
                    </Typography>
                    <Typography component="h5" variant="h5">
                        {pro_obj.which_contest.name_contest}
                    </Typography>
                    <img
                        src={pro_obj.which_contest.image}
                        style={{ width: "100%", display: "block" }}
                    />
                </SwiperSlide>
            );
        }
    };

    const constestsList = pro_contests.map((obj) => {
        return (
            <SwiperSlide>
                <Typography component="h6" variant="h6" styles={{marginTop: "6px"}}>
                    {t("profile.grab")} {obj.need_qr}
                </Typography>
                <Typography component="h5" variant="h5">
                    {obj.name_contest}
                </Typography>
                <img
                    src={obj.image}
                    style={{ width: "100%", display: "block" }}
                    alt="contest_image"
                />
            </SwiperSlide>
        );
    });
    constestsList.unshift(currentContest());
    console.log(constestsList);

    const listItems = pro_tokens.map((number) => {
        return (
            <Typography
                component="p"
                variant="h6"
                style={{ color: "green", fontSize: "14px" }}
            >
                {number.token}
            </Typography>
        );
    });

    return (
        <MainContainer style={{  }}>
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
            <Typography component="h5" variant="h5">
                {t("profile.hello")}
            </Typography>
            <Typography component="h5" variant="h5">
                {pro_obj.first_name} {pro_obj.last_name}
            </Typography>
            <SmallInfo>
                <p>{t("profile.scanned")}</p>
                <p>{t("profile.today")}</p>
                {pro_obj.qr_in_day}
                <p>{t("profile.all")}</p>
                {pro_obj.qr_quantity}
            </SmallInfo>

            <Typography
                component="h5"
                variant="h6"
                style={{ margin: "30px 0 0 0" }}
            >
                Списки участвовавших:
            </Typography>

            <Link style={{
                margin: "0 0 10px 0"
            }} href="claptops">Ноутбук</Link>
            <Link style={{
                margin: "0 0 10px 0"
            }} href="cps4">Приставка PS4 Slim</Link>
            <Link style={{
                margin: "0 0 10px 0"
            }} href="csamokat">Электросамокат</Link>     
            <Link style={{
                margin: "0 0 10px 0"
            }} href="cphone">Смартфон</Link>
            <Link style={{
                margin: "0 0 10px 0"
            }} href="cvelosiped">Велосипед</Link>
            <Link style={{
                margin: "0 0 10px 0"
            }} href="cyandex">Портативная колонка от Yandex</Link>
            <Link style={{
                margin: "0 0 10px 0"
            }} href="cthermos">Термос</Link>
            <Link href="csandwiches" style={{
                margin: "0 0 30px 0"
            }}>Набор из сендвичей</Link>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                modules={[EffectCoverflow]}
                effect="coverflow"
            >
                {constestsList}
            </Swiper>

            <Typography component="h5" variant="h5">
                {t("profile.your_codes")}
                <p> </p>
                {listItems}
            </Typography>
            <Link href="/shop" className="goShop" style={{margin: "70px 0 0 0"}}>
            <Typography
                component="h5"
                variant="h6"
                
            >
                {t("site.goshop")}<br/><img src={storeIcon} alt="shop icon" style={{width: 60}}/>
            </Typography>
            </Link>
            <Typography
                component="h5"
                variant="h6"
                style={{ margin: "70px 0 0 0" }}
            >
                {pro_obj.username}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{ margin: "70px 0 70px 0" }}
            >
                <Link href="/contest-about">{t("site.contest_req")}</Link>
            </Typography>
            <LanguageSelector />
        </MainContainer>
    );
};
