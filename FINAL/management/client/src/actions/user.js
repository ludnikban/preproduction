import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const registration = (last_Name, first_Name, nick_Name, email, password, phone_Number, description, position) => {

  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:5000/user/auth/reg`, {
        last_Name,
        first_Name,
        nick_Name,
        email,
        password,
        phone_Number,
        description,
        position
      })

      dispatch(setUser(response.data))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const login = (email, password) => {

  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:5000/user/auth/login`, {
        email,
        password
      })

// запись токена в локал стор
      dispatch(setUser(response.data))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const companies = (email) => {

  return async dispatch => {

    try {

      const response = await axios.get(`http://localhost:5000/user/companies`,
        {
          params: {email: email},
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        }
      )

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

        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      )


      dispatch(setUser(response.data))
      // запись токена в локал стор
      // localStorage.setItem('token', response.data.token)
    } catch (e) {
      // удаление токена из локал стор
      // localStorage.removeItem('token')
    }
  }
}

