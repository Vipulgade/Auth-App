import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
    { path: "*", element: <Login /> }, // Redirect unknown routes to Login
  ]);

  return routes;
};

export default App;
