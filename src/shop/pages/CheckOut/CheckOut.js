import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useData } from "../../../DataContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

import MainContainer from "../../../components/MainContainer";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Form from "../../../components/Form";
import { PrimaryButton } from "../../../components/PromaryButton";
import Typography from "@material-ui/core/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import addSuccess from "../../../media/add-to-basket.png";
import { Button } from "@mui/material";

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

export const CheckOut = () => {

    const history = useHistory();
    const cart = useSelector((state) => state.cart);
    const products = cart.products[0];

    function uniq_fast(a) {
        var seen = {};
        var out = [];
        var len = a.length;
        var j = 0;
        for (var i = 0; i < len; i++) {
            var item = a[i];
            if (seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
    }

    if (localStorage.adress == null) {
        var top100Films = [];
    } else {
        var top100Films_dirty = JSON.parse(localStorage.getItem("adress"));
        var top100Films = uniq_fast(top100Films_dirty).reverse();
    }

    const { data, setValues } = useData();
    const [value, setValue] = useState();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            adress: data.adress,
        },

        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(data);
        setValues(data);
        if (localStorage.adress == null) {
            console.log(JSON.parse(localStorage.getItem("adress")));
            let places = [];
            places.push(data.adress);
            localStorage.setItem("adress", JSON.stringify(places));
        } else {
            console.log(JSON.parse(localStorage.getItem("adress")));
            let places = JSON.parse(localStorage.getItem("adress"));
            places.push(data.adress);
            localStorage.setItem("adress", JSON.stringify(places));
        }

        axios({
            method: "post",
            url: `http://kavkev.kg:8080/api/my_cart/create_order/`,
            headers: {
                Authorization: `Token ${localStorage.userToken}`,
            },
            data: {
                adress: data.adress,
                status: "В ожидании доставки",
            },
        })
            .then(function (response) {
                console.log(response);
                setOpen(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        history.push("/shop");
    };

    return (
        <MainContainer className="formContainer">
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
                            Ваш заказ принят и поступил в обработку!
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
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginBottom: 40,
                }}
            >
                Укажите адрес, по которому должна быть произведена доставка
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)} className="greenColorForm">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ minWidth: 400 }}
                    style={{
                        marginBottom: 40,
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Адрес"
                            {...register("adress", { required: true })}
                        />
                    )}
                />
                {products?.sum_price ? (
                    <Typography component="h5" variant="h5">
                        К оплате: {products?.sum_price} сом + доставка(обговаривается по телефону)
                    </Typography>
                    
                ) : (
                    <></>
                )}
                 <Typography component="h5" variant="h5">
                    Оплата на метсе
                </Typography>

                <Typography component="h5" variant="h5">
                    С вами свяжутся по номеру
                </Typography>
                <Typography component="h5" variant="h5">
                    {localStorage.phoneNumber}
                </Typography>
                <PrimaryButton
                    type="submit"
                    style={{
                        backgroundColor: "#aff6cf",
                    }}
                >
                    Оформить
                </PrimaryButton>
            </Form>
        </MainContainer>
    );
};
