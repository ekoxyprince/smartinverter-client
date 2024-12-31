import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const IsAuth = ({children})=>{
  const {isAuthenticated} = useAuth()
  if(!isAuthenticated) return <Navigate to={"/login"}/>
  return <>{children}</>
}
export default IsAuth