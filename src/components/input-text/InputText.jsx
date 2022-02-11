import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./InputText.css";
import { Controller } from "react-hook-form";
const InputText = ({ label, maxRows, maxValue, name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <TextField
          className="input-text"
          id="standard-multiline-flexible"
          label={label}
          multiline
          maxRows={maxRows}
          value={value}
          onChange={onChange}
          variant="standard"
          inputProps={{ maxLength: maxValue }}
          FormHelperTextProps={{
            className: "helperText",
          }}
          helperText={`${value.length}/${maxValue}`}
        />
      )}
    />
  );
};

export default InputText;
