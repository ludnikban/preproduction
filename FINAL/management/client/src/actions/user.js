import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const registration = (email, password, last_Name, first_Name, nick_Name, description, position) => {

  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:5000/user/auth/reg`, {
        email,
        password,
        last_Name,
        first_Name,
        nick_Name,
        description,
        position
      })

      // console.log(response)

      dispatch(setUser(response.data))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const login = (email, password) => {

  // console.log(email, password)

  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:5000/user/auth/login`, {
        email,
        password
      })

      // console.log("user login response", response)

// запись токена в локал стор
      dispatch(setUser(response.data))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const companies = (email) => {

// console.log("user1 email", email)

  return async dispatch => {

// console.log("user2 email", email)

    try {

      const response = await axios.get(`http://localhost:5000/user/companies`,
        {
          params: {email: email},
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        }
      )

// console.log("user3 response", response)

      dispatch(setUser(response.data))
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const auth = () => {

  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:5000/user/profile`,
        // const response = await axios.get(`http://localhost:5000/user/auth/reg`,

        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      )

      // console.log(response)

      dispatch(setUser(response.data))
      // запись токена в локал стор
      // localStorage.setItem('token', response.data.token)
    } catch (e) {
      // удаление токена из локал стор
      // localStorage.removeItem('token')
    }
  }
}

