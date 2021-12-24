import { Input } from "../components/Input";
import "../App.css";
import { useHistory } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/PromaryButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Vector from '../media/Vector 36.png'
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import alert from "../media/alert.png";

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

export const Login = () => {
    const { t, i18n } = useTranslation()

    const history = useHistory();
    const { data, setValues } = useData();
    const [value, setValue] = useState();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            password: data.password,
        },

        mode: "onBlur",
    });

    const handleShowHide = () => {
        setShow(!show);
    };

    const [show, setShow] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setValues(data);

        async function getProfile() {
            let res = await axios({
                method: "GET",
                url: "http://www.api-kavkev.kg/api/profile/my/",
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

        axios
            .post("http://api-kavkev.kg/api/login/", {
                username: value,
                password: data.password,
            })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem("userToken", response.data.token);
                console.log('0000000000000000000000000')
                if(localStorage.token !== undefined){
                    history.push(`/scan/${localStorage.token}`);
                }else{
                    getProfile()
                            .then((res) => {
                                console.log(res);
                                console.log("Profile gotten")
                                localStorage.setItem('pro_obj', JSON.stringify(res.profile));
                                localStorage.setItem('pro_tokens', JSON.stringify(res.tokens));
                                localStorage.setItem('pro_contests', JSON.stringify(res.contests));
                                history.push("/profile");
                            })
                            .catch((error) => {
                                console.log(error);
                            });            
                }
                

            }) 
            .catch(function (error) {
                console.log(error);
                setOpen(true)
                history.push("/login");
            });
    };

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <MainContainer style={{width: "90%", justifyContent: "center"}}>
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
                        <span style={{color: "red", fontSize: "22px"}}>{t("login.error")}</span>
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
                <img alt="назад" src={Vector}></img>
            </Link>
            <Typography component="h5" variant="h5">
            {t("login.welcomeback")}
            </Typography>
            
            <Typography component="h5" variant="h5">
            {t("login.number")}
            </Typography>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <PhoneInput
                    defaultCountry="KG"
                    inputComponent={Input}
                    placeholder="Номер телефона"
                    value={value}
                    onChange={setValue}
                    label="Номер телефона"
                />
                <Typography component="h5" variant="h5" style={{
                            marginTop: "30px",
                        }}>
                            {t("login.password")}
                </Typography>

                <Input
                    {...register("password", { required: true, maxLength: 40 })}
                    id="password"
                    type={show ? "text" : "password"}
                    label="Пароль"
                    name="password"
                    placeholder="Введите пароль"
                />
                {show ? (
                    <FontAwesomeIcon
                        icon={faEye}
                        id="show_hide"
                        onClick={handleShowHide}
                        style={{
                            transform: "translateX(155px) translateY(-44px)",
                        }}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        id="show_hide"
                        onClick={handleShowHide}
                        style={{
                            transform: "translateX(155px) translateY(-44px)",
                        }}
                    />
                )}
                <PrimaryButton type="submit" >{t("login.login")}</PrimaryButton>
            </Form>
            <Typography component="h5" variant="h6" style={{margin: "102vh 0 0 0", position: "absolute"}}> 
                <Link href="/about">{t("site.contest_req")}</Link>
            </Typography>
        </MainContainer>
    );
};
