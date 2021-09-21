import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function FormLogin({ setUser, setAuto }) {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    name: yup
      .string()
      .required("Campo obrigatório")
      .test("len", "Maximo de 18 caracteres", (val) => val.length < 18)
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
        "O Nome deve conter apenas letras!"
      ),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Campo Obrigatorio!")
      .oneOf([yup.ref("password"), null], "As senhas nao combinam"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    setUser(data.name);
    setAuto(true);
    history.push("/Welcome");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 400,
          height: 400,
          mx: "auto",
          alignItems: "center",
          alignContent: "center",
          backgroundColor: "#FBFAF8",
          "& > :not(style)": { m: 1, width: "25ch" },
          borderRadius: 16,
          boxShadow: 3,
        }}
        xs={5}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <TextField
          label="Nome"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="E-mail"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Confirme a Senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("passwordConfirm")}
          error={!!errors.passwordConfirm}
          helperText={errors.passwordConfirm?.message}
        />

        <Button variant="contained" color="success" type="submit">
          Entrar
        </Button>
      </Box>
    </>
  );
}

export default FormLogin;
