import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import Details from '../components/Details';
import FormComponent from '../form/Form'
import {addInfo, editHandler} from '../function/function'
import { ToastContainer } from 'react-toastify';

const initialState = {title: "", image: "", content: ""}

function AppRouter() {
    const [info, setInfo] = useState(initialState)

  const handleFormSubmit = () => {
    addInfo(info);
    // if(info?.id){
    //   editHandler(info)
    // } else {
    //   addInfo(info);
    // }
    setInfo(initialState)
    console.log("deneme");
  }
  const updateFormHandler = (item) => {
    setInfo({...item})
  }
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Dashboard 
                    updateFormHandler={updateFormHandler} 
                    />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register" >
                    <Register />
                </Route>
                <Route path="/detail" >
                    <Details />
                </Route>
                <Route path="/new-blog">
                    <FormComponent
                    info={info} 
                    setInfo={setInfo} 
                    handleFormSubmit={handleFormSubmit} 
                     />
                </Route>
            </Switch>
            <ToastContainer/>
        </Router>
    )
}

export default AppRouter
