import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";

const FormularioCadastro: FC<{ aoEnviar: any }> = ({ aoEnviar }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar(userData);
      }}
    >
      <TextField
        value={userData.firstName}
        onChange={(event) => {
          const newData = { ...userData };
          newData.firstName = event.target.value;
          setUserData(newData);
        }}
        name="firstName"
        id="firstName"
        label="Nome"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={userData.lastName}
        onChange={(event) => {
          const newData = { ...userData };
          newData.lastName = event.target.value;
          setUserData(newData);
        }}
        name="lastName"
        id="lastName"
        label="Sobrenome"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={userData.email}
        onChange={(event) => {
          const newData = { ...userData };
          newData.email = event.target.value;
          setUserData(newData);
        }}
        name="email"
        id="email"
        label="E-mail"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={userData.password}
        onChange={(event) => {
          const newData = { ...userData };
          newData.password = event.target.value;
          setUserData(newData);
        }}
        name="password"
        id="password"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => aoEnviar(userData)}
      >
        Gravar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
