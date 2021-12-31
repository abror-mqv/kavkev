import { useTranslation } from "react-i18next";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RowRadioButtonsGroup() {
    const { t, i18n } = useTranslation();
    const [value, setValue] = React.useState("ru");

    const changeLanguage = (event) => {
        setValue(event.target.value);
        i18n.changeLanguage(event.target.value);
    };
    return (
        <FormControl component="fieldset">
            <RadioGroup
                row
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={changeLanguage}
                style={{ marginTop: "20px", marginBottom: "20px" }}
            >
                <FormControlLabel
                    value="ru"
                    control={<Radio />}
                    label="Ru"
                />
                <FormControlLabel
                    value="kg"
                    control={<Radio />}
                    label="Kg"
                />
                <FormControlLabel
                    value="en"
                    control={<Radio />}
                    label="En"
                />
            </RadioGroup>
        </FormControl>
    );
}
