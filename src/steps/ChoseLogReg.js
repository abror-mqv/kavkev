import MainContainer from "../components/MainContainer";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import Link from "@mui/material/Link";
import Vector from '../media/Vector 36.png'

export const ChoseLogReg = () => {
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
            <Typography component="h3" variant="h3">
                Выбери вариант входа:
            </Typography>
            <Button
                onClick={buttonReg}
                style={{ marginTop: "40px", width: "80%", fontSize: "4vw" }}
                variant="contained"
                disableElevation
            >
                Зарегестрироваться
            </Button>

            <Button
                onClick={buttonLog}
                style={{
                    marginTop: "40px",
                    backgroundColor: "green",
                    width: "80%",
                    fontSize: "4vw",
                }}
                variant="contained"
                disableElevation
            >
                У меня уже есть аккаунт
            </Button>
            <Typography
                component="h5"
                variant="h6"
                style={{ margin: "102vh 0 0 0", position: "absolute" }}
            >
                <Link href="/about">Условия акции</Link>
            </Typography>
        </MainContainer>
    );
};
