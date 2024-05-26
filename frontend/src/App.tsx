import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import SignIn from "./pages/SignIn";
import Employees from "./pages/Employees";
import Dashboard from "./pages/Dashboard";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<PrivateRouteWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRouteWrapper = (



) => {
  const isAuth = localStorage.getItem("token");
  return isAuth ? (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </RootLayout>
  ) : (
    <Navigate to="/signin" />
  );
};

export default App;
