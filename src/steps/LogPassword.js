import { Input } from "../components/Input";
import "../App.css";
import { useHistory } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/PromaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from '@mui/material/Link';
import Vector from '../media/Vector 36.png'

export const LogPassword = () => {
    const history = useHistory();
    const { data, setValues } = useData();
    const [show, setShow] = useState(false);

    const { register, handleSubmit } = useForm({
        defaultValues: { password: data.password },
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(data);
        setValues(data)
        history.push("/profile");
    };

    const handleShowHide = () => {
        setShow(!show);
    };

    return (
        <MainContainer style={{width:"320px"}}>

            <Link href="/registration" className="back-arrow">
                <img alt="назад" src={Vector}></img>
            </Link>
            
            <Typography component="h5" variant="h5">
                Введите свой пароль
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)} className="password-form">
                <Input
                    {...register("password", { pattern: /^[0-9]+$/i })}
                    id="password"
                    type={show ? "text" : "password"}
                    label="Password"
                    name="Password"
                    placeholder="Введите пароль"
                />
                {show ? (
                    <FontAwesomeIcon
                        icon={faEye}
                        id="show_hide_log"
                        onClick={handleShowHide}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        id="show_hide_log"
                        onClick={handleShowHide}
                    />
                )}

                <PrimaryButton type="submit">Отправить</PrimaryButton>
            </Form>
            <Typography component="h5" variant="h6" style={{margin: "102vh 0 0 0", position: "absolute"}}> 
                <Link href="/about">Условия акции</Link>
            </Typography>
        </MainContainer>
    );
};
