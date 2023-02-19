import { Route } from "react-router-dom";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

const PublicRoute: React.FC = () => {
  return (
    <Route path="*" element={<NotFoundPage />} />
  )
}

export default PublicRoute