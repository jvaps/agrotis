import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Controller } from "react-hook-form";
const Select = ({ name, options, label, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          onChange={(item) => {
            onChange(item);
          }}
          value={value}
          options={options}
          getOptionLabel={(item) => (item.name ? item.name : "")}
          isOptionEqualToValue={(option, value) =>
            value === undefined || value === "" || option.id === value.id
          }
          renderInput={(params) => (
            <TextField
              required
              {...params}
              label={label}
              margin="normal"
              variant="outlined"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
      )}
      rules={{ required: "Campo obrigatório" }}
    />
  );
};

export default Select;
