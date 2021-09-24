import { makeStyles } from '@mui/styles';
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
  Paper,

} from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import GoogleButton from './GoogleButton';
import React, { useState } from "react";
import { createUser, signUpProvider } from '../firebase/firebase';
import { useHistory } from "react-router-dom";
import Signup from '../pages/Signup';

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
  }
  return (
    <Grid>
      <Paper elevation={20} sx={{ padding: "30px 20px", width: 300, margin: "20px auto" }}>
        <Grid align="center">
          <Avatar className={signupStyles.avatar} sx={{ backgroundColor: "#1bbd7e" }}>
            <AddCircleIcon />
          </Avatar>
          <Typography className={signupStyles.signUp} variant="h4">
            Register
          </Typography>
        </Grid>
        <form id="register" onSubmit={handleSubmit}>
          <TextField
            sx={{ mb: 2 }}
            name="firstname"
            label="Firstname"
            variant="outlined"
            fullWidth
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
          sx={{ mb: 2 }}
            name="lastname"
            label="Lastname"
            variant="outlined"
            fullWidth
            onChange={e => setLastName(e.target.value)}
          />
          <TextField
          sx={{ mb: 2 }}
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
          sx={{ mb: 2 }}
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            onChange={e => setPassword(e.target.value)}
          />
          <Button
          sx={{ mb: 2 }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Register;

