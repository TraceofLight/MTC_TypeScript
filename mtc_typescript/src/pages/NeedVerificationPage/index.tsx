import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux/es/exports";
import { RootState } from "redux/store";

const NeedVerificationPage: React.FC = () => {
  const userStatus = useSelector((state: RootState) => state.userStatus);
  const emailVerified = userStatus.emailVerified;
  const phoneNumber = userStatus.phoneNumber;

  if (emailVerified === true && phoneNumber !== null) {
    return <Navigate to="/" replace={true} />;
  } else {
    return (
      <>
        <h1>확인 페이지</h1>
      </>
    );
  }
};

export default NeedVerificationPage;
