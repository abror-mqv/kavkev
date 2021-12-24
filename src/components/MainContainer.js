import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(8),
        marginBottom: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px"               
    }
}));

const MainContainer = ({ children, ...props }) => {
    const styles = useStyles();
    return (
        <Container className={styles.root} container="main" maxWidth="xs" {...props}>
            {children}
        </Container>
    )
}

export default MainContainer