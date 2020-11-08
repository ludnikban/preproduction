import axios from "axios";

export default {
  GET_USERS_FROM_API({commit}) {
    return axios('http://api.github.com/users', {
      method: "GET"
    })
      .then((result) => {
        commit('SET_USERS', result.data);
        return result;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
}