import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../providers/dataContext";
const Alerta = () => {
  const { feedBack, setFeedBack } = useContext(DataContext);

  return (
    <div>
      <Snackbar
        open={feedBack === 1}
        autoHideDuration={3000}
        onClose={() => setFeedBack(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setFeedBack(null)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Dados salvos com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar
        open={feedBack === 0}
        autoHideDuration={3000}
        onClose={() => setFeedBack(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setFeedBack(null)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Preencha os campos obrigatórios
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Alerta;
