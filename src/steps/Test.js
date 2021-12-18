import MainContainer from "../components/MainContainer";
import Button from "@mui/material/Button";
import * as React from "react";
import axios from "axios";


export const Test = () => {
    let config = {
        headers: {
            Authorization: `Token 5658b2a6177a7ebbe2f58eb9017a1307f0186223`,
        },
    };
    const URL = `http://api-kavkev.kg/api/profile/my/`;
    const data = {};

    const GetProfile = () => {
        console.log("senddTOKKEENNN");

        axios
            .get(URL, config, data)
            .then(function (response) {
                console.log(response.data);
                
            })
            .catch(function (error) {
                console.log("errrorororororororo");
                console.log(error);
            });
    };

    return (
        <MainContainer>
            <Button
                onClick={GetProfile}
                style={{
                    marginTop: "40px",
                    backgroundColor: "green",
                    width: "80%",
                    fontSize: "4vw",
                    backgroundImage:
                        "linear-gradient(108.73deg, #f9881f 23.73%, #f9881f 23.73%, #ff774c 79.34%)",
                }}
                variant="contain`ed"
                disableElevation
            >
                Забрать
            </Button>
        </MainContainer>
    );
};
