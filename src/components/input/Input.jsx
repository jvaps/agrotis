import TextField from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";
import "./Input.css";
const Input = ({ maxValue, control }) => {
  return (
    <Controller
      name="nome"
      control={control}
      defaultValue=""
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <TextField
          required
          className="input"
          value={value}
          label="Nome"
          variant="outlined"
          onChange={onChange}
          onBlur={onBlur}
          error={!!error}
          helperText={error ? error.message : `${value.length}/${maxValue}`}
          inputProps={{ maxLength: maxValue }}
          FormHelperTextProps={{
            className: "helperText",
          }}
        />
      )}
      rules={{ required: "Campo obrigatório" }}
    />
  );
};

export default Input;
