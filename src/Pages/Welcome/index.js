import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
const Welcome = ({ user, setAuto }) => {
  const history = useHistory();
  const back = () => {
    setAuto(false);
    history.push("/");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column" },
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
        }}
        id="principal"
      >
        <div>Seja bem Vindo {user} !</div>
        <Button onClick={back} id="buttonBack">
          Voltar
        </Button>
      </Box>
    </motion.div>
  );
};

export default Welcome;
