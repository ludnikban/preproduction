import axios from "axios";

export default {
  getUsersFromAPI({commit}) {
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
