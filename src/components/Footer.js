import * as React from "react";
import wa from "../shop/wa.png";
import ig from "../shop/ig.png";
import ha from './halal.png'
import Typography from "@mui/material/Typography";

import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const currentTime = new Date()
    const year = currentTime.getFullYear()
    const { t, i18n } = useTranslation()
    const [value, setValue] = React.useState(0);

    return (
        <><div>
            <hr
                style={{
                    marginTop: "70px",
                    color: "rgb(130, 130, 130)",
                    boxShadow: "0px -10px 10px 0px rgba(34, 60, 80, 0.2)"
                }}
            />
            <footer>
                <div
                    style={{
                        gap: "40px",
                    }}
                >
                    <a
                        href="https://api.whatsapp.com/send/?phone=%2B996999999999&text&app_absent=0"
                        className="footer__walink"
                    >
                        <img src={wa} alt="whatsapp"/>
                    </a>
                    <a href="https://www.instagram.com/kav_kev.kg/" className="footer__walink">
                        <img src={ig} alt="instagram" />
                    </a>
                    <a href="https://www.halal.kg/">
                        <img src={ha} alt="halal certificate"/>
                    </a>
                </div>
                <Typography
                    component="h4"
                    variant="caption text"
                    style={{
                        textAlign: "start",
                    }}
                >
                    {t("footer.1")} <br /> {t("footer.2")}
                    <p>1999-{year}</p>
                    {t("footer.4")}
                </Typography>
            </footer>
            </div>
        </>
    );
};

// df