import React from "react";
import TextField from "@material-ui/core/TextField";

export const Input = React.forwardRef((props, ref) => {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            label="input"
            margin="normal"
            inputRef={ref}
            fullWidth
            {...props}
        />
    );
});
