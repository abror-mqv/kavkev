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

export const Login = () => {
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

        axios
            .post("http://api-kavkev.kg/api/login/", {
                username: value,
                password: data.password,
            })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem("userToken", response.data.token);
                console.log('0000000000000000000000000')
                history.push(`/scan/${localStorage.token}`);

            }) 
            .catch(function (error) {
                console.log(error);
                history.push("/login");
            });
    };

    return (
        <MainContainer style={{width: "90%", justifyContent: "center"}}>
            <Link href="/chose-log-reg" className="back-arrow">
                <img alt="назад" src={Vector}></img>
            </Link>
            
            <Typography component="h5" variant="h5">
                Введи свой номер
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
                            И пароль
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
                            transform: "translateX(180px) translateY(-48px)",
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
                <PrimaryButton type="submit" >Войти</PrimaryButton>
            </Form>
            <Typography component="h5" variant="h6" style={{margin: "102vh 0 0 0", position: "absolute"}}> 
                <Link href="/about">Условия акции</Link>
            </Typography>
        </MainContainer>
    );
};
