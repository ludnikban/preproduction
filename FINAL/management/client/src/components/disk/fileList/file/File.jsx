import React from 'react';
import './file.css'
const File = ({file}) => {
    return (
        <div className='file'>
          <div className="file__name">{file.name}</div>
          <div className="file__address">{file.address}</div>
          <div className="file__number_Of_Employees">{file.number_Of_Employees}</div>
          <div className="file__type">{file.type}</div>
          <div className="file__service_Of_Activity">{file.service_Of_Activity}</div>
          <div className="file__description">{file.description}</div>
        </div>
    );
};

export default File;
