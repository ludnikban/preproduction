import React from 'react';
import './fileList.css'
import {useSelector} from "react-redux";
import File from "./file/File";
// import {useDispatch} from "react-redux";
// import {companies} from "../../../actions/user";

const FileList = () => {

  const files = useSelector(state => state.user.User.user.company).map(item => <File key={item.id} file={item}/>)

  return (
    <div className='filelist'>
      <h2 className="filelist">Cписок компаний </h2>
      <div className="filelist__header">
        <h3 className="filelist__name">Название</h3>
        <h3 className="filelist__type">Тип</h3>
        <h3 className="filelist__number_Of_Employees">Численность</h3>
        <h3 className="filelist__address">Адрес</h3>
        <h3 className="filelist__service_Of_Activity">Сервис</h3>
        <h3 className="description">Описание</h3>
      </div>
      {files}
    </div>
  );
};

export default FileList;
