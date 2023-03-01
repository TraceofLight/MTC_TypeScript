import { useEffect } from "react";

import { Navigate, useOutlet } from "react-router-dom";
import { AppDispatch, RootState } from "redux/store";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import { authenticationCheck } from "redux/slice/userStatusSlice";

interface loginProps {
  needLogin: boolean;
}

const PrivateRoute = ({ needLogin }: loginProps) => {
  const outlet = useOutlet();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authenticationCheck());
  }, [dispatch]);

  const userStatus = useSelector((state: RootState) => state.userStatus);

  const currentUser = userStatus.currentUser;
  const emailVerified = userStatus.emailVerified;
  const phoneNumber = userStatus.phoneNumber;

  if (currentUser === null) {
    return needLogin ? <Navigate to="/login" replace={true} /> : outlet;
  } else {
    if (emailVerified === false || phoneNumber === null) {
      return <Navigate to="/need-verification" replace={true} />;
    } else {
      return needLogin ? outlet : <Navigate to="/" replace={true} />;
    }
  }
};

export default PrivateRoute;
