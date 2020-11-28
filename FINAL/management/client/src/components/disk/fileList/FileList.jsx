import React from 'react';
import './fileList.css'
import {useSelector} from "react-redux";
import File from "./file/File";

// const FileList = ({user}) => {
  const FileList = () => {

  const files = useSelector(state => state.user.User.user.company).map(item => <File key={item.id} file={item}/>)
  // console.log(files)

  return (
    <div className='filelist'>
      {/*<h2 className="filelist__company">Список компаний {user.nick_Name}</h2>*/}
      <h2 className="filelist__company">Список компаний</h2>
      <div className="filelist__header">
        <div className="filelist__name">Название</div>
        <div className="filelist__address">Адрес</div>
        <div className="filelist__number_Of_Employees">Кол-во</div>
        <div className="filelist__type">Тип</div>
        <div className="filelist__service_Of_Activity">Сервис</div>
        <div className="description">Описание</div>
      </div>
      {files}
    </div>
  );
};

export default FileList;
