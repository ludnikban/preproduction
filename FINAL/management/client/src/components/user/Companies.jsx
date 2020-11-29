import React from 'react'
import FileList from "./fileList/FileList"
import './companies.css'
import {useDispatch, useSelector} from "react-redux";
// import {login} from "../../actions/user";
// import {companies} from "../../actions/user";

const Companies = () => {

  const user = useSelector(state => state.user.User.user)

  return (
    <div className="companies">
      <h2 className="companies__header">Пользователь {user.nick_Name} </h2>

      <div className="companies__btns">
        <button className="companies__create__create">Добавить компанию</button>
      </div>
      <FileList/>
    </div>
  );
};

export default Companies
