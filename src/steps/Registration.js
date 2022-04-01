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
import { useTranslation } from 'react-i18next'
import Button from "@mui/material/Button";


export const Registration = () => {
    const { t, i18n } = useTranslation()

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
            <Link href="/" className="back-arrow">
                <img alt="назад" src={Vector}></img>
            </Link>
            <Typography component="h5" variant="h5">
            {t("reg.warning")}
            </Typography>
            <br/>
            <br/>
            <Typography component="h5" variant="h5">
            {t("reg.number")}
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <PhoneInput
                    defaultCountry="KG"
                    inputComponent={Input}
                    placeholder={t("site.input.number")}
                    label={t("site.input.number")}
                    value={value}
                    onChange={setValue}
                />
                <Typography component="h5" variant="h5">
                {t("reg.name")}
                </Typography>
                <Input
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                    })}
                    id="firstName"
                    type="text"
                    label={t("site.input.name")}
                    name="firstName"
                />
                <Input
                    {...register("lastName", {
                        required: true,
                        maxLength: 40,
                    })}
                    id="lastName"
                    type="text"
                    label={t("site.input.last_name")}
                    name="lastName"
                />
                <PrimaryButton type="submit">{t("reg.submit")}</PrimaryButton>
                <Link style={{
                margin: "0 0 10px 0"
            }} href="call">Все участники</Link>
            </Form>

        </MainContainer>
    );
};
