import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "production") {
  baseURL = "http://157.230.30.157";
} else {
  baseURL = "http://localhost:5000";
}

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("fixa::token")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(sessionStorage.getItem("fixa::token")).token
    }`;
  }

  return req;
});

export const signUp = (formData) => API.post("/register/", formData);
export const signIn = (formData) => API.post("/login/", formData);
