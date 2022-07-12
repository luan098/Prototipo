import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FormularioCadastro from "src/Components/FormularioCadastro/FormularioCadastro";
import UserService from "src/Services/UserService";
import "./index.css";

const Home = () => {
  const [users, setUsers] = useState([] as Array<any>);

  const buscarUsuarios = async () => {
    setUsers(await UserService.listUser());
  };

  useEffect(() => {
    buscarUsuarios();
  }, []);

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>

      <FormularioCadastro
        aoEnviar={(useData: any) => {
          UserService.createUser(useData);
        }}
      />
    </Container>
  );
};

export default Home;
