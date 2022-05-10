import axios from "axios"
import { alertWrongMail } from "../utils/alerts"

export const userRegisterService = async ({
  firstName,
  surname,
  age,
  country,
  email,
  password,
  alertNewUser,
  alertNewPassword,
  navigate,
}) => {
  try {
    const register = await axios.post(
      "http://localhost:3001/api/user/register",
      {
        firstName: firstName,
        surname: surname,
        age: age,
        country: country,
        email: email,
        password: password,
      }
    )
    if (alertNewPassword) {alertNewPassword(); navigate("/"); return register.data}
    alertNewUser()
    navigate("/")
    return register.data
  } catch (error) {
    throw error
  }
}

export const userLoginService = async ({ email, password, navigate }) => {
  try {
    const loginUser = await axios.post("http://localhost:3001/api/user/login", {
      email,
      password,
    })
    navigate("/")
    return loginUser.data
  } catch (error) {
    throw error
  }
}

export const userLogoutService = async () => {
  try {
    const logoutUser = await axios.post("http://localhost:3001/api/user/logout")
    return logoutUser.data
  } catch (error) {
    throw error
  }
}

export const getUserService = async ({ email, navigate }) => {
  try {
    const getUser = await axios.get(
      `http://localhost:3001/api/user/find/${email.value}`
    )
    return getUser.data
  } catch (error) {
    alertWrongMail(navigate)
    throw error
  }
}

export const deleteUserService = async ({ id }) => {
  try {
    const deleteUser = await axios.delete(
      `http://localhost:3001/api/user/delete/${id}`
    )
    return deleteUser.data
  } catch (error) {
    throw error
  }
}
