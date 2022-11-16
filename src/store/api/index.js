import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "production") {
  baseURL = "http://157.230.30.157";
} else {
  baseURL = "http://157.230.30.157";
}

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  if (sessionStorage.getItem("fixa::token")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(sessionStorage.getItem("fixa::token")).token
    }`;
  }

  return req;
});

export const signUp = (formData) => API.post("/register", formData);
export const signIn = (formData) => API.post("/login", formData);
export const getProfile = (id) => API.get(`/fetchclient/${id}`);
export const updateProfile = (data) => API.put("/editprofile", data);
