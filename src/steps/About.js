import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import Link from '@mui/material/Link';
import insta from "../media/insta.png";
import LanguageSelector from '../components/LanguageSelector'

export const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <MainContainer style={{ maxWidth: "720px" }}>
            <LanguageSelector/>
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("site.contest_req")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.1")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.2")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.3")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4")}
            </Typography>
            <br />
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4.a")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4.b")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4.c")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4.d")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4.e")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4.f")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4.g")}
            </Typography>
            <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.4.h")}
            </Typography>
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.5")}
            </Typography>
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >       
                
                 <Link href="https://www.instagram.com/kav_kev.kg/">  <img src={insta} alt="instagram logo" style={{width: "30px"}}/> Instagram</Link>
                {t("req.6")}
            </Typography>{" "}
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >
                {t("req.7")}
            </Typography>
        </MainContainer>
    );
};
