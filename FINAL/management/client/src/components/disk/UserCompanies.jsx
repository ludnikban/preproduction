import React from 'react'
import FileList from "./fileList/FileList"
import './usercompanies.css'
import {useSelector} from "react-redux";

const UserCompanies = () => {
  const user = useSelector(state => state.user.User.user)

  return (
    <div className="usercompanies">
      <h2 className="filelist__company">{user.nick_Name} cписок компаний </h2>
      <div className="usercompanies__btns">
        {/*<button className="usercompanies__back">Назад</button>*/}
        <button className="usercompanies__create__create">Добавить компанию</button>
      </div>
      <FileList/>
    </div>
  );
};

export default UserCompanies
