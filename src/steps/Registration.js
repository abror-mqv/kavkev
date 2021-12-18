import { Input } from "../components/Input";
import "../App.css";
import { useHistory } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";
import { useData } from "../DataContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/PromaryButton";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "@mui/material/Link";
import Vector from '../media/Vector 36.png'

export const Registration = () => {
    const history = useHistory();
    const { data, setValues } = useData();
    const [value, setValue] = useState();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: data.firstName,
            lastName: data.lastName,
            token: localStorage.token,
        },
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("phoneNumber", value);
        setValues(data);
        console.log(data);
        history.push("/reg-password");
    };

    return (
        <MainContainer>
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
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                />
                <Typography component="h5" variant="h5">
                    Введи свое имя и фамилию
                </Typography>
                <Input
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                    })}
                    id="firstName"
                    type="text"
                    label="Имя"
                    name="firstName"
                />
                <Input
                    {...register("lastName", {
                        required: true,
                        maxLength: 40,
                    })}
                    id="lastName"
                    type="text"
                    label="Фамилия"
                    name="lastName"
                />
                <PrimaryButton type="submit">Отправить</PrimaryButton>
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
