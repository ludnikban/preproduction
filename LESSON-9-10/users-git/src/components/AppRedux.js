import React, {Component} from 'react';
import {connect} from 'react-redux';
import {usersFetchData} from '../actions/users';
import {CreateListUsers} from "../CreateList";
import {DeleteListUsers} from "../DeleteList";

class AppRedux extends Component {

  componentDidMount() {
    this.props.fetchData('http://api.github.com/users');
  }

  render() {

    return (
      <div>
        <h2>Список пользователей Github, полученный с помощью Redux</h2>
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2" id="users">
          {DeleteListUsers()}
          {
            this.props.users.forEach(item => {
              const addUsers = document.getElementById('users');
              CreateListUsers(item, addUsers);

            })
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {

  return {
    users: state.users,
    hasErrored: state.usersHasErrored,
    isLoading: state.usersIsLoading
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(usersFetchData(url))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux);



