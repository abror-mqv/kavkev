import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, 0, 0),
        bottom: '-90px',
        fontSize: "24px",
        backgroundImage: "linear-gradient(108.73deg, #F9881F 23.73%, #F9881F 23.73%, #FF774C 79.34%)"
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
