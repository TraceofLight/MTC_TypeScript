import { Route } from "react-router-dom";
import LoginPage from "pages/LoginPage/LoginPage";

const PrivateRoute: React.FC = () => {
  return (
    <Route path="/login" element={< LoginPage />} />
  )
}

export default PrivateRoute