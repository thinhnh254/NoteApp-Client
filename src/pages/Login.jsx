import { Button, Typography } from "@mui/material";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
    console.log(res);
  };

  if (user?.uid) {
    navigate("/");
    return;
  }
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Test MUI
      </Typography>
      <Button variant="outlined" onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </>
  );
};

export default Login;
