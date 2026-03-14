import { useDispatch, useSelector } from "react-redux";
import { logout, loginUser } from "../features/auth/authSlice";


export const useAuth = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const login = async (credentials) => {
    const result = await dispatch(loginUser(credentials));
    return result;
  };

  const signOut = () => {
    dispatch(logout());
  };

  return {
    ...auth,
    login,
    signOut
  };

};