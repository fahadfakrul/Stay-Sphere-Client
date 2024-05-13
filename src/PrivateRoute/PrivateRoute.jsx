import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner text-black loading-lg "></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
