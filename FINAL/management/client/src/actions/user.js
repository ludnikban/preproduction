import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const registration = async (email, password) => {

  console.log(email, password)

  try {
    const response = await axios.post(`http://localhost:5000/user/auth/reg`, {
      email,
      password
    })

  console.log(response)

  } catch (e) {
    alert(e.response.data.message)
  }
}

export const login = (email, password) => {

  console.log(email, password)

  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:5000/user/auth/login`, {
        email,
        password
      })

  console.log(response)

// запись токена в локал стор
      dispatch(setUser(response.data))
      localStorage.setItem('token', response.data.token)
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

      console.log(response)

      dispatch(setUser(response.data))
      // запись токена в локал стор
      // localStorage.setItem('token', response.data.token)
    } catch (e) {
      // удаление токена из локал стор
      // localStorage.removeItem('token')
    }
  }
}

