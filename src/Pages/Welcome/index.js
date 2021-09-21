import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import Button from "@mui/material/Button";
const Welcome = ({ user, setAuto }) => {
  const history = useHistory();
  const back = () => {
    setAuto(false);
    history.push("/");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          bgcolor: "background.paper",
          overflow: "hidden",
          borderRadius: "12px",
          fontSize: 15,
          boxShadow: 1,
          fontWeight: "bold",
          width: 200,
          height: 200,
          justifyContent: "center",
          flexDirection: "column",
        }}
        id="principal"
      >
        <div>Seja bem Vindo {user} !</div>
        <Button onClick={back} id="buttonBack">
          Voltar
        </Button>
      </Box>
    </>
  );
};

export default Welcome;
