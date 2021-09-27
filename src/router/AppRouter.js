import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import Details from '../components/Details';
import Profile from '../components/Profil';
import FormComponent from '../form/Form'
import { addInfo, editHandler } from '../function/function'
import { ToastContainer } from 'react-toastify';
// import { useHistory } from "react-router-dom";

const initialState = { title: "", image: "", content: "",email: ""}

function AppRouter() {
  const [info, setInfo] = useState(initialState)

  const handleFormSubmit = (e) => {
    //   e.preventDefault();
    // addInfo(info);
    console.log(info)
    if (info?.id) {
      editHandler(info)
    } else {
      addInfo(info);
    }
    setInfo(initialState)
  }
  // const history = useHistory();
  const updateFormHandler = (item) => {
    setInfo({ ...item })
    // history?.push("/detail/:id")
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register" >
          <Register />
        </Route>
        <Route exact path="/detail/:id">
          <Details
            updateFormHandler={updateFormHandler}
          />
        </Route>
        <Route exact path="/profile" >
          <Profile />
        </Route>
        <Route exact path="/new-blog">
          <FormComponent
            info={info}
            setInfo={setInfo}
            handleFormSubmit={handleFormSubmit}
          />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  )
}

export default AppRouter
