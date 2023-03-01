import { Routes, Route } from "react-router-dom";

import PrivateRoute from "Router/PrivateRoute";

import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import LoginPage from "pages/LoginPage";
import NeedVerificationPage from "pages/NeedVerificationPage";

import "App.css";

const App: React.FC = () => {
  return (
    <Routes>
      {/* 로그인 상관 없이 접근 가능 */}
      <Route path="*" element={<NotFoundPage />} />

      {/* 로그인이 필요한 페이지 */}
      <Route element={<PrivateRoute needLogin={true} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/need-verification" element={<NeedVerificationPage />} />
      </Route>

      {/* 로그인이 필요하지 않은 페이지 */}
      <Route element={<PrivateRoute needLogin={false} />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
