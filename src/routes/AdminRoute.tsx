import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface AdminRouteProps {
  children: JSX.Element;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { isAdminAuthenticated } = useAuth();

  return isAdminAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

export default AdminRoute;
