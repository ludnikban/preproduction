import React from "react";
// import {CreateListUsers} from "../CreateList";
// import {DeleteListUsers} from "../DeleteList";
import {RenderList} from "./AppRender"

class AppReact extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      hasErrored: false,
      isLoading: false
    };
  }

  fetchDataReact(url) {
    this.setState({isLoading: true});

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        this.setState({isLoading: false});

        return response;
      })
      .then(response => response.json())
      .then(async data => this.setState({users: data}))
      .catch(() => this.setState({hasErrored: true}));
  }

  componentDidMount() {
    this.fetchDataReact('http://api.github.com/users');
  }

  render() {
    if (this.state.hasErrored) {
      return <p>Извините! При загрузке списка возникла ошибка</p>;
    }

    if (this.state.isLoading) {
      return <p>Список загружается…</p>;
    }

    return (
      <div className="container">
        <h2>Список пользователей Github, полученный с помощью React</h2>
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2" id="users">
          {this.state.users.map((item, index) => (
            RenderList(item)))
          }
        </div>
      </div>
    );
  }
}

export default AppReact
