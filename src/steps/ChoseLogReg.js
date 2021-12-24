import MainContainer from "../components/MainContainer";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Link from "@mui/material/Link";
import Vector from '../media/Vector 36.png'
import { useTranslation } from 'react-i18next'

export const ChoseLogReg = () => {
    const { t, i18n } = useTranslation()
    const history = useHistory();

    const buttonReg = () => {
        history.push("/registration");
    };

    const buttonLog = () => {
        history.push("/login");
    };

    return (
        <MainContainer>
            <Link href={`scan/${localStorage.token}`} className="back-arrow">
                <img alt="назад" src={Vector}></img>
            </Link>
            <Typography component="h3" variant="h4">
            {t("chose_log_reg.chose")}
            </Typography>
            <Button
                onClick={buttonReg}
                style={{ marginTop: "40px", width: "100%", height: "70px", fontSize: "22px" }}
                variant="contained"
                disableElevation
            >
                {t("chose_log_reg.reg")}
            </Button>

            <Button
                onClick={buttonLog}
                style={{
                    marginTop: "40px",
                    backgroundColor: "green",
                    width: "100%" ,
                    height: "70px",
                    fontSize: "22px"
                }}
                variant="contained"
                disableElevation
            >
                {t("chose_log_reg.login")}
            </Button>
            <Typography
                component="h5"
                variant="h6"
                style={{ margin: "102vh 0 0 0", position: "absolute" }}
            >
                <Link href="/about">{t("site.contest_req")}</Link>
            </Typography>
        </MainContainer>
    );
};
