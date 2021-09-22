import { makeStyles } from '@mui/styles';
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,

} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
    <Container className={signupStyles.wrapper}>
      <Avatar className={signupStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={signupStyles.signUp} variant="h4">
        Login
      </Typography>

      <form id="login">
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleProviderLogin}
            >
              with Google
            </Button>
          </Grid>
        </Grid>
      </form>

    </Container>
  );
}

export default Login;