import { makeStyles } from '@mui/styles';
import {
  Button,
  TextField,
  Grid,
  Avatar,
  Typography,
  Paper,

} from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signIn, signUpProvider } from "../firebase/firebase";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: '3rem',
    height: 'calc(100vh - 19.0625rem)',
    textAlign: 'center',
    marginBottom: '12rem',
    width: '30rem'
  },
  avatar: {
    margin: '1rem auto',
    //   backgroundColor: theme.palette.secondary?.main,
  },
  signUp: {
    margin: '1rem',
  },
  login: {
    textDecoration: 'none',
    fontWeight: '600',
    paddingLeft: '0.5rem',
  },
  googleImg: {
    width: 75,
    marginLeft: 10,
  },
}));

function Login() {
  const signupStyles = stylesFunc();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const user = { email, password };
    signIn(user.email, user.password);
    history.push("/");
  };
  const handleProviderLogin = () => {
    signUpProvider();
    history.push("/");
  };

  return (
    <Grid>
      <Paper elevation={20} sx={{ padding: "30px 20px", width: 300, margin: "20px auto" }}>
        <Grid align="center">
          <Avatar className={signupStyles.avatar} sx={{ backgroundColor: "#1bbd7e" }}>
            <AddCircleIcon />
          </Avatar>
          <Typography className={signupStyles.signUp} variant="h4">
            Login
          </Typography>
        </Grid>

        <form id="login" onSubmit={handleSubmit}>
          <TextField
            sx={{ mb: 2 }}
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            sx={{ mb: 2 }}
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            sx={{ mb: 2 }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>
          <Button
            sx={{ mb: 2 }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            <Link to={"/register"} style={{ textDecoration: 'none', color: 'white' }}>or Register</Link>
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleProviderLogin}
          >
            with Google
          </Button>
        </form>
      </Paper>
    </Grid>

  );
}

export default Login;