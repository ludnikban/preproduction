import React from 'react'
import FileList from "./fileList/FileList"
import './usercompanies.css'
// import {useSelector} from "react-redux";

const UserCompanies = () => {
  // const user = useSelector(state => state.user.User.user).map(item => <FileList key={item.id} file={item}/>)
  // console.log(user)

  return (
    <div className="usercompanies">
      {/*{user}*/}
      <div className="usercompanies__btns">
          {/*<button className="usercompanies__back">Назад</button>*/}
          <button className="usercompanies__create__create">Добавить компанию</button>
      </div>
      <FileList/>
    </div>
  );
};

export default UserCompanies
