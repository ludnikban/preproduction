import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {registration} from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [last_Name, setlast_Name] = useState("")
  const [first_Name, setfirst_Name] = useState("")
  const [nick_Name, setnick_Name] = useState("")
  const [description, setdescription] = useState("")
  const [position, setposition] = useState("")
  // const [phone_Number, setphone_Number] = useState("")
  const dispatch = useDispatch()

  return (
    <div className='authorization'>
      <div className="authorization__header">Регистрация</div>
      <Input value={last_Name} setValue={setlast_Name} type="text" placeholder="Введите фамилию..." required/>
      <Input value={first_Name} setValue={setfirst_Name} type="text" placeholder="Введите имя..." required/>
      <Input value={nick_Name} setValue={setnick_Name} type="text" placeholder="Введите псевдоним..." required/>
      <Input value={email} setValue={setEmail} type="email" placeholder="Введите email..." required/>
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль... " required/>
      {/*<Input value={phone_Number} setvalue={setphone_Number} placeholder="Введите номер телефона..." required/>*/}
      <Input value={description} setValue={setdescription} type="text" placeholder="Введите описание..." required/>
      <Input value={position} setValue={setposition} type="text" placeholder="Введите роль..." required/>
      <button className="authorization__btn" onClick={() =>
        dispatch(registration(email, password, last_Name, first_Name, nick_Name,description,position))}>Зарегистрироваться</button>
    </div>
  );
};

export default Registration;
