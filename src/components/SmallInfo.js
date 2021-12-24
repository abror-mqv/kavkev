import React from "react";
// backgroundImage: "linear-gradient(108.73deg, #F9881F 23.73%, #F9881F 23.73%, #FF774C 79.34%)",
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, -20, 0),
        bottom: '-90px',
        fontSize: "24px",
        backgroundImage: "linear-gradient(93.26deg, #4E53FF 9.35%, #2B23BD 88.89%)",
        width: "70%",
        color: "white",
        padding: "20px 20px 30px 20px",
        textAlign: "center",
        borderRadius: "30px",
        marginTop: "70px",
        border: "0px",
        marginBottom: "70px"


    },
}));

export const SmallInfo = ({children}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            {children}            
        </div>
    );
};
