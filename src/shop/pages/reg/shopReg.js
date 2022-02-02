import { Input } from "../../../components/Input";
import { useHistory } from "react-router-dom";
import MainContainer from "../../../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../../../components/Form";
import { useData } from "../../../DataContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../components/PromaryButton";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "@mui/material/Link";
import Vector from '../../../media/Vector 36.png'

export const ShopReg = () => {

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
        history.push("/shop/reg-password");
    };

    return (
        <MainContainer>
            <Link href="/shop/registration" className="back-arrow">
                <img alt="назад" src={Vector}></img>
            </Link>
            <Typography component="h5" variant="h5">
                Регистрация
            </Typography>
            <br/>
            <br/>
            <Typography component="h5" variant="h5">
            Введите свой номер
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <PhoneInput
                    defaultCountry="KG"
                    inputComponent={Input}
                    placeholder="Введите свой номер"
                    label="номер"
                    value={value}
                    onChange={setValue}
                />
                <Typography component="h5" variant="h5">
                Введите свои имя и фамилию
                </Typography>
                <Input
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                    })}
                    id="firstName"
                    type="text"
                    label="имя"
                    name="firstName"
                />
                <Input
                    {...register("lastName", {
                        required: true,
                        maxLength: 40,
                    })}
                    id="lastName"
                    type="text"
                    label="фамилия"
                    name="lastName"
                />
                <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
            </Form>

        </MainContainer>
    );
};
