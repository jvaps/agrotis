import TextField from "@mui/material/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import DateFnsUtils from "@date-io/date-fns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import { Controller } from "react-hook-form";
import "./Calendar.css";
const Calendar = ({ name, label, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value = null },
        fieldState: { error },
      }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils}>
          <DatePicker
            className="calendar"
            format="dd/MM/yyyy"
            label={label}
            value={value}
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!error}
                required
                helperText={error ? error.message : ""}
                placeholder="DD/MM/YYYY"
              />
            )}
          />
        </LocalizationProvider>
      )}
      rules={{ required: "Campo obrigatório" }}
    />
  );
};

export default Calendar;
