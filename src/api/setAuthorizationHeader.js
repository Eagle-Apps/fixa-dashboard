import { fenix } from "./index";

export default function setAuthorizationHeader(token = null) {
  if (token) {
    fenix.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete fenix.defaults.headers.common.authorization;
  }
}
