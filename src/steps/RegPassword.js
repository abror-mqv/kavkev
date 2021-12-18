import { Input } from "../components/Input";
import "../App.css";
import { useHistory } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";
import axios from "axios";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/PromaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faTimes,
    faCheck,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "@mui/material/Link";
import Vector from "../media/Vector 36.png";

export const RegPassword = () => {
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

        axios
            .post("http://api-kavkev.kg/api/registration/", {
                username: localStorage.phoneNumber,
                password: data.password,
                first_name: data.firstName,
                last_name: data.lastName,
            })
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem("userToken", response.data.token);
                history.push(`/scan/${localStorage.token}`);
            })
            .catch(function (error) {
                console.log(error);
                history.push("/registration");
            });

        console.log("++++++++++++");
        console.log(localStorage.phoneNumber);
        console.log(data.firstName);
        console.log(data.lastName);
        console.log(data.password);
        console.log("-----------");

        console.log("RegPassword submiting");
        history.push("/step1");
    };

    return (
        <MainContainer>
            <Link href="/chose-log-reg" className="back-arrow">
                <img alt="назад" src={Vector}></img>
            </Link>
            <Typography component="h5" variant="h5">
                Придумай пароль
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("password", { required: true, maxLength: 30 })}
                    id="password"
                    type={show ? "text" : "password"}
                    label="password"
                    name="password"
                    placeholder="Введите пароль"
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
                    <span>Используйте цифры</span>
                </p>
                <p id="more8">
                    <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
                    <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
                    <span>8+ символов</span>
                </p>

                <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
            </Form>
            <Typography
                component="h5"
                variant="h6"
                style={{ margin: "80vh 0 0 0", position: "absolute" }}
            >
                <Link href="/about">Условия акции</Link>
            </Typography>
        </MainContainer>
    );
};
