import React from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useSelector} from "react-redux";
import UserCompanies from "./disk/UserCompanies";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <div className="wrap">
          {!isAuth ?
            <Switch>
              <Route path="/signup" component={Registration}/>
              <Route path="/signin" component={Login}/>
              <Redirect to='/signin'/>
            </Switch>
            :
            <Switch>
              <Route exact path="/companies" component={UserCompanies}/>
              <Redirect to="/companies"/>
            </Switch>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;







