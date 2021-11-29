import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const appoint=(username,email,doctorname)=>{
  return axios.post(API_URL+"appoint",{
    username,
    email,
    doctorname,
  })
};


const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const verifyUser = (code) => {
  return axios.get(API_URL + "confirm/" + code).then((response) => {
    return response.data;
  });
};

export default {
  register,
  appoint,
  login,
  logout,
  getCurrentUser,
  verifyUser,
};
