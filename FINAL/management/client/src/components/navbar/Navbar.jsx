import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/technorely.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="" className="navbar__logo"/>
        <div className="navbar__header">MANAGEMENT</div>
        {!isAuth && <div className="navbar__login"><NavLink to="/signin">Войти</NavLink></div>}
        {!isAuth && <div className="navbar__registration"><NavLink to="/signup">Регистрация</NavLink></div>}
        {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}>Выход</div>}
      </div>
    </div>
  );
};

export default Navbar;
