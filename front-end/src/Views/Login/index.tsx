import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Yup from "yup";

import { Form, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { loginUser } from "src/store/reducers/auth";
import { useFormik } from "formik";
import { setWindowClass } from "src/Utils/helpers";
import Checkbox from "src/Components/checkbox/Checkbox";
import Button from "src/Components/button/Button";
import AuthService from "src/Services/AuthService";

const Login = () => {
  const [isAuthLoading, setAuthLoading] = useState(false);
  const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
  const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      setAuthLoading(true);
      const token = await AuthService.loginByAuth(email, password);
      if (!token) throw new Error("User does not exist!");

      toast.success("Login is succeed!");
      setAuthLoading(false);
      dispatch(loginUser(token));
      navigate("/");
    } catch (error: any) {
      setAuthLoading(false);
      toast.error(error.message || "Failed");
    }
  };

  const loginByGoogle = async () => {
    try {
      setGoogleAuthLoading(true);
      // const token = await AuthService.loginByGoogle();
      toast.success("Disabled!");
      setGoogleAuthLoading(false);
      // dispatch(loginUser(token));
      // navigate("/");
    } catch (error: any) {
      setGoogleAuthLoading(false);
      toast.error(error.message || "Failed");
    }
  };

  const loginByFacebook = async () => {
    try {
      setFacebookAuthLoading(true);
      // const token = await AuthService.loginByFacebook();
      toast.success("Disabled!");
      setFacebookAuthLoading(false);
      // dispatch(loginUser(token));
      // navigate("/");
    } catch (error: any) {
      setFacebookAuthLoading(false);
      toast.error(error.message || "Failed");
    }
  };

  const { handleChange, values, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(30, "Must be 30 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  setWindowClass("hold-transition login-page");

  return (
    <div className="login-box">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <Link to="/" className="h1">
            <b>Admin</b>
            <span>LTE</span>
          </Link>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                />
                {touched.email && errors.email ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                ) : (
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                  </InputGroup.Append>
                )}
              </InputGroup>
            </div>
            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                />
                {touched.password && errors.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : (
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                  </InputGroup.Append>
                )}
              </InputGroup>
            </div>

            <div className="row">
              <div className="col-8">
                <Checkbox type="icheck" checked={false}>
                  Remember Me
                </Checkbox>
              </div>
              <div className="col-4">
                <Button
                  block
                  type="submit"
                  isLoading={isAuthLoading}
                  disabled={isFacebookAuthLoading || isGoogleAuthLoading}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mt-2 mb-3">
            <Button
              block
              icon="facebook"
              onClick={loginByFacebook}
              isLoading={isFacebookAuthLoading}
              disabled={isAuthLoading || isGoogleAuthLoading}
            >
              Sign up using Facebook
            </Button>
            <Button
              block
              icon="google"
              theme="danger"
              onClick={loginByGoogle}
              isLoading={isGoogleAuthLoading}
              disabled={isAuthLoading || isFacebookAuthLoading}
            >
              Sign up using Google
            </Button>
          </div>
          <p className="mb-1">
            <Link to="/forgot-password">I forgot my password</Link>
          </p>
          <p className="mb-0">
            <Link to="/register" className="text-center">
              Register a new membership
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
