import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [last_Name, setlast_Name] = useState("")
  const [first_Name, setfirst_Name] = useState("")
  const [nick_Name, setnick_Name] = useState("")
  const [phone_Number, setphone_Number] = useState("")
  const [description, setdescription] = useState("")
  const [position, setposition] = useState("")

  return (
    <div className='authorization'>
      <div className="authorization__header">Регистрация</div>
      <Input value={last_Name} setValue={setlast_Name} type="text" placeholder="Введите фамилию..."/>
      <Input value={first_Name} setValue={setfirst_Name} type="text" placeholder="Введите имя..."/>
      <Input value={nick_Name} setValue={setnick_Name} type="text" placeholder="Введите псевдоним..."/>
      <Input value={email} setValue={setEmail} type="email" placeholder="Введите email..."/>
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
      {/*<Input value={phone_Number} setvalue={setphone_Number} type="text" placeholder="Введите номер телефона..."/>*/}
      <Input value={description} setValue={setdescription} type="text" placeholder="Введите описание..."/>
      <Input value={position} setValue={setposition} type="text" placeholder="Введите роль..."/>
      <button className="authorization__btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
    </div>
  );
};

export default Registration;
