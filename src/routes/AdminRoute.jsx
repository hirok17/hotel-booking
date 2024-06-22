import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";


const AdminRoute = ({children}) => {
   const [role, isLoading]=useRole();
   if(isLoading) return <Loader></Loader>
   if(role === "admin") return children;
   return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoute;