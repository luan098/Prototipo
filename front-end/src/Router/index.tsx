import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "src/modules/main/Main";
import PreLoader from "../Components/pre-loader";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Login = lazy(() => import("src/Views/Login"));
const Register = lazy(() => import("src/Views/Register"));
const ForgotPassword = lazy(() => import("src/Views/ForgotPassword"));
const RecoverPassword = lazy(() => import("src/Views/RecoverPassword"));
const Error404 = lazy(() => import("src/Views/Error404"));
const Home = lazy(() => import("src/Views/Home"));
const Users = lazy(() => import("src/Views/Users/"));
const UsersCreate = lazy(() => import("src/Views/Users/UsersControl"));
const Profile = lazy(() => import("src/Views/Profile"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/register" element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/forgot-password" element={<PublicRoute />}>
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route path="/recover-password" element={<PublicRoute />}>
            <Route path="/recover-password" element={<RecoverPassword />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/create" element={<UsersCreate />} />
              <Route path="/users/edit/:id" element={<UsersCreate />} />
            </Route>
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
