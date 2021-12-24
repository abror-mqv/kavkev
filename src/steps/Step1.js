import "../App.css";
import { useParams, useHistory } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../components/PromaryButton";
import axios from "axios";
import Link from '@mui/material/Link';
import { useTranslation } from "react-i18next"
import LanguageSelector from '../components/LanguageSelector'


export const Step1 = () => {
    const { t, i18n } = useTranslation()

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

    const { tokenSlug } = useParams();
    console.log("token: ", tokenSlug)
    const history = useHistory();
    const { handleSubmit } = useForm({
        mode: "onBlur",
    });

    const sendToken = () => {
        axios({
            method: "put",
            url: `http://api-kavkev.kg/api/token/${localStorage.token}/`,
            headers: {
                Authorization: `Token ${localStorage.userToken}`,
            },
            data: {},
        })
            .then((response) => {
                console.log(response.status, "9999999999999");
                localStorage.removeItem("isTook");

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
            })
            .catch((error) =>{
                localStorage.setItem("isTook", error.response.status)
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
            );


        console.log("tokkkenennn sentt");
    };

    const onSubmit = () => {
        localStorage.setItem("token", tokenSlug);
        console.log(tokenSlug);
        


        if (typeof localStorage.userToken !== "undefined") {
            sendToken();
           
        } else {
            history.push("/chose-log-reg");
        }
    };


    return (
        <MainContainer>
            <LanguageSelector/>
            <div className="increment">
                <div className="white-text-1">+1</div>
            </div>
            <Typography component="h2" variant="h4" styles={{fontSize: "12px"}}> 
                {t("step1.congrats")}
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                    component="h5"
                    variant="h6"
                    style={{ color: "green", marginTop: "30px" }}
                >
                    ...{tokenSlug}...
                </Typography>

                <PrimaryButton type="submit">{t("step1.grab")}</PrimaryButton>
            </Form>
            <Typography component="h5" variant="h6" style={{margin: "80vh 0 0 0", position: "absolute"}}> 
                <Link href="/about">{t("site.contest_req")}</Link>
            </Typography>
        </MainContainer>
    );
};
