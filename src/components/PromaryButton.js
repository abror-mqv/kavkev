import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, 0, 0),
        bottom: '-90px',
        fontSize: "24px",
        backgroundImage: "linear-gradient(93.26deg, #4E53FF 9.35%, #2B23BD 88.89%)"
    },
}));

export const PrimaryButton = ({ children, props }) => {
    const styles = useStyles();

    return (
        <Button
            className={styles.root}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            {...props}
        >
            {children}
        </Button>
    );
};
