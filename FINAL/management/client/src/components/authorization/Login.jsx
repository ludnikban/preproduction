import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {companies, login} from "../../actions/user";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  return (
    <div className='authorization'>
      <div className="authorization__header">Авторизация</div>
      <Input value={email} setValue={setEmail} type="email" placeholder="Введите email..." required/>
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." required/>
      <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Войти</button>
    </div>
  )
}

export default Login;
