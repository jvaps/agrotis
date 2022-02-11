import React from "react";
import Container from "../../components/container/Container";
import Input from "../../components/input/Input";
import Calendar from "../../components/calendar/Calendar";
import Select from "../../components/select/Select";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../providers/dataContext";
import InputText from "../../components/input-text/InputText";
import { useForm } from "react-hook-form";
import "./Form.css";
import Header from "../../components/header/Header";
import Alerta from "../../components/alert/Alert";
const Form = () => {
  const { property, lab, setFeedBack } = useContext(DataContext);
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    if (data) {
      setFeedBack(0);
      return console.log(data);
    } else return setFeedBack(0);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Header onClick={handleSubmit(onSubmit)} />
          </Grid>
          <Grid item xs={6}>
            <Input label="Nome" maxValue={40} control={control} />
          </Grid>
          <Grid item xs={2}>
            <Calendar
              label="Data inicial"
              control={control}
              name="dataInicial"
            />
          </Grid>
          <Grid item xs={2}>
            <Calendar label="Data final" control={control} name="dataFinal" />
          </Grid>
          <Grid item xs={5}>
            <Select
              label="Propriedades"
              options={property}
              control={control}
              name={"infosPropriedade"}
            />
          </Grid>
          <Grid item xs={5}>
            <Select
              label="Laboratório"
              options={lab}
              control={control}
              name={"laboratorio"}
            />
          </Grid>
          <Grid item xs={10}>
            <InputText
              name={"observacoes"}
              label="Observações"
              maxRows={5}
              maxValue={1000}
              control={control}
            ></InputText>
          </Grid>
        </Grid>
      </Container>
      <Alerta></Alerta>
    </form>
  );
};

export default Form;
