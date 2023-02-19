import { Routes } from "react-router-dom";

import PublicRoute from "Router/PublicRoute";
import PrivateRoute from "Router/PrivateRoute";
import "App.css";

const App = () => {
  return (
    <Routes>
      <PublicRoute />
      <PrivateRoute />
    </Routes>
  );
}
export default App;
