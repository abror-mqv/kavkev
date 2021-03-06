import { Input } from "../../../components/Input";
import { useHistory } from "react-router-dom";
import MainContainer from "../../../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../../../components/Form";
import axios from "axios";
import { useData } from "../../../DataContext";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../components/PromaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faTimes,
    faCheck,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "@mui/material/Link";
import Vector from "../../../media/Vector 36.png";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import alert from "../../../media/alert.png";

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


export const ShopRegPassword = () => {
    const history = useHistory();

    const valid = (item, v_icon, inv_icon) => {
        let text = document.querySelector(`#${item}`);
        text.style.opacity = "1";

        let valid_icon = document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity = "1";

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = "0";
    };

    const invalid = (item, v_icon, inv_icon) => {
        let text = document.querySelector(`#${item}`);
        text.style.opacity = "0.5";

        let valid_icon = document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity = "0";

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = "1";
    };

    const handleInputChange = (e) => {
        const passwordValidator = e.target.value;

        if (passwordValidator.match(/[0-9]/) != null) {
            valid("num", "fa-check", "fa-times");
        } else {
            invalid("num", "fa-check", "fa-times");
        }
        if (passwordValidator.length > 7) {
            valid("more8", "fa-check", "fa-times");
        } else {
            invalid("more8", "fa-check", "fa-times");
        }
    };

    const handleShowHide = () => {
        setShow(!show);
    };

    const [show, setShow] = useState(false);

    const { data, setValues } = useData();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
        },
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        setValues(data);
        console.log(data.password);


        async function getProfile() {
            let res = await axios({
                method: "GET",
                url: "http://www.api-kavkev.kg:8080/api/profile/my/",
                headers: {
                    Authorization: `Token ${localStorage.userToken}`,
                },
                data: {},
            });
            if (res.status === 200) {
                console.log(res.status);
            }
            return res.data;
        }


        async function postRegistration() {
            let response = await axios({
                method: "POST",
                url: "http://api-kavkev.kg:8080/api/registration/",
                data: {
                    username: localStorage.phoneNumber,
                    password: data.password,
                    first_name: data.firstName,
                    last_name: data.lastName,
                }
            });
                return response
            }
            postRegistration()
                    .then(function (response) {
                        console.log("it gets .then")
                        console.log(response.status)
                        if(response.status === 401){
                            setOpen(true)
                            history.push('/shop/registration')
                        }else{
                            localStorage.setItem("userToken", response.data.token);
                            if(localStorage.token !== undefined){
                                history.push(`/shop/product/${localStorage.prod_id}`);
                            }else{
                                getProfile()
                                        .then((res) => {
                                            console.log(res);
                                            console.log("Profile gotten")
                                            localStorage.setItem('pro_obj', JSON.stringify(res.profile));
                                            localStorage.setItem('pro_tokens', JSON.stringify(res.tokens));
                                            localStorage.setItem('pro_contests', JSON.stringify(res.contests));
                                            history.push(`/shop/product/${localStorage.prod_id}`);
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });            
                            }
                        }

                    })
                    .catch(function (error) {
                        console.log("it gets .catch")
                        console.log(error);
                        setOpen(true);
                        history.push("/shop/registration");
                    });

        console.log("++++++++++++");
        console.log(localStorage.phoneNumber);
        console.log(data.firstName);
        console.log(data.lastName);
        console.log(data.password);
        console.log("-----------");

        console.log("RegPassword submiting");
    };

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MainContainer>
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
                        <span style={{ color: "red", fontSize: "22px" }}>
                            ???????????? ??????????????????????! ????????????????, ???? ???????????? ?????????? ?????? ?????????????????????????????? ??????????????
                        </span>
                        <img
                            src={alert}
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
            <Link href="/chose-log-reg" className="back-arrow">
                <img alt="??????????" src={Vector}></img>
            </Link>
            <Typography component="h5" variant="h5">
                ???????????????????? ????????????
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("password", { required: true, maxLength: 30 })}
                    id="password"
                    type={show ? "text" : "password"}
                    label="????????????"
                    name="password"
                    placeholder="???????????????????? ????????????"
                    onChange={handleInputChange}
                />
                {show ? (
                    <FontAwesomeIcon
                        icon={faEye}
                        id="show_hide"
                        onClick={handleShowHide}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        id="show_hide"
                        onClick={handleShowHide}
                    />
                )}
                <p id="num">
                    <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
                    <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
                    <span>???????????? ???????????? ?????????????????? ?????????? ?? ?????? ??????????</span>
                </p>
                <p id="more8">
                    <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
                    <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
                    <span>???????????? ???????????? ???????????????? ???? 8 ???????????????? ?????? ??????????????</span>
                </p>

                <PrimaryButton type="submit">
                    ????????????????????????????????????
                </PrimaryButton>
            </Form>
        </MainContainer>
    );
};
