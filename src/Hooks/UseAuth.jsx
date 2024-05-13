import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const UseAuth = () => {
  const allAuthContext = useContext(AuthContext);
  return allAuthContext;
};

export default UseAuth;
