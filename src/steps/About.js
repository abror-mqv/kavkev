import MainContainer from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";

export const About = () => {
    return (
        <MainContainer>
            <Typography
                component="h5"
                variant="h5"
                style={{
                    marginTop: "30px",
                }}
            >Условия акции</Typography>
                        <Typography
                component="h5"
                variant="h6"
                style={{
                    marginTop: "30px",
                }}
            >Текст</Typography>
        </MainContainer>
    );
};
