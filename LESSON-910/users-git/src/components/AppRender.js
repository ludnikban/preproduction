import React from "react";

export let RenderList = user => {

  return (<div className="col mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={user.avatar_url} alt={user.login}/>
        <div className="card-body">
          <h5 className="card-title">{user.login}</h5>
          <pre className="card-text"> id: {user.id} type: {user.type}</pre>
        </div>
      </div>
    </div>
  );
}
