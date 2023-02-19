import React from "react";
import { Route, RouteProps } from "react-router-dom";

import LoginPage from "pages/LoginPage";

const PrivateRoute: React.FC<RouteProps> = () => {
  return (
    <Route>
      <Route path="/login" element={<LoginPage />} />
    </Route>
  );
};

export default PrivateRoute;
