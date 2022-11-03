import axios from "axios";

const fixa = axios.create({
  baseURL: "https://fixa.herokuapp.com",
});

export { fixa };
