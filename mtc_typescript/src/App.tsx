import { Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import LoginPage from "pages/LoginPage";

import "App.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
