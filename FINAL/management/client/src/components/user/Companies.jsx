import React from 'react'
import FileList from "./fileList/FileList"
import './companies.css'
import {useSelector} from "react-redux"

const Companies = () => {

  const user = useSelector(state => state.user.User.user)

  if (user.company === undefined || user.company.length === 0) {
    return (
      <div className="companies">
        <h2 className="companies__header">Пользователь {user.first_Name} {user.last_Name}</h2>
        <div className="companies__btns">
          <button className="companies__create__create">Добавить компанию</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="companies">
        <h2 className="companies__header">Пользователь {user.first_Name} {user.last_Name} </h2>
        <div className="companies__btns">
          <button className="companies__create__create">Добавить компанию</button>
        </div>
        <FileList/>
      </div>
    )
  }
}

export default Companies

