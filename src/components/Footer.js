import * as React from "react";
import wa from "../shop/wa.png";
import ig from "../shop/ig.png";
import Typography from "@mui/material/Typography";


export const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <>
            <hr style={{
                marginTop: "70px",
                width: "20%",
                color: "rgb(130, 130, 130)"

            }} />
            <footer>
                <Typography component="h6" variant="h6">Контакты: +996 999 999 999</Typography>
                <div style={{
                    gap: "40px"
                }}>
                    <a href="https://api.whatsapp.com/send/?phone=%2B996999999999&text&app_absent=0" className="footer__walink">
                        <img src={wa} />
                    </a>
                    <a href="https://www.instagram.com/kav_kev.kg/">
                        <img src={ig} />
                    </a>
                </div>
            </footer>
        </>
    );
};
