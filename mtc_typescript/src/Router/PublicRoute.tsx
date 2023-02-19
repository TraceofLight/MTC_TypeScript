import React from "react";
import { Route, RouteProps } from "react-router-dom";

import NotFoundPage from "pages/NotFoundPage";

const PublicRoute: React.FC<RouteProps> = () => {
  return (
    <Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  );
};

export default PublicRoute;
