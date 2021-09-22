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
import GoogleButton from './GoogleButton';
import React, { useState } from "react";
import {createUser, signUpProvider} from '../firebase/firebase';
 import { useHistory } from "react-router-dom";

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

function Register() {
  const signupStyles = stylesFunc();
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    const user = { firstName, lastName, email, password };
    const displayName = `${firstName} ${lastName}`;
    createUser(user.email, user.password, displayName);
    history.push('/');
    console.log(firstName,lastName,email,password);
    console.log(createUser())
  }
  const handleProviderRegister = () => {
    signUpProvider();
    history.push('/');
  }
  return (
    <Container className={signupStyles.wrapper}>
      <Avatar className={signupStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={signupStyles.signUp} variant="h4">
        Register
      </Typography>

      <form id="register">
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField
              name="firstname"
              label="Firstname"
              variant="outlined"
              fullWidth
              onChange={e => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastname"
              label="Lastname"
              variant="outlined"
              fullWidth
              onChange={e => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              onChange={e => setPassword(e.target.value)}
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
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleProviderRegister}
            >
              with Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Register;

