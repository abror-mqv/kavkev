import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(16),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
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