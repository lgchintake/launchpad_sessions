import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../assets/login.scss";
import { useEffect, useState } from "react";
import { loginUser } from "../apis/LoginApis";
import { ToastContainer } from "react-toastify";
import { showNotification } from "../helpers/utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../helpers/LoginContext";

export const LoginComponent = () => {
  const { isUserLoggedIn, setLoginUser } = useAuth();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const userLogin = async () => {
    if (loginDetails.username === "" || loginDetails.password === "") {
      await showNotification(
        "warn",
        "Please enter your username and password!"
      );
    } else {
      const apiResponse = await loginUser(loginDetails);
      if (apiResponse.status) {
        await showNotification("success", apiResponse.data.message);
        setTimeout(() => setLoginUser(loginDetails.username), 2000);
      } else {
        await showNotification("error", apiResponse.data.message);
      }
    }
  };
  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, [isUserLoggedIn]);
  return (
    <Container>
      <Row>
        <Col sm={6} md={4} className="login-container p-4">
          <Form noValidate={true}>
            <Row>
              <Col className="text-center mb-1">
                <img
                  className="login-logo"
                  src="/logo.jpg"
                  alt="Company Logo"
                />
              </Col>
            </Row>

            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Username"
              value={loginDetails.username}
              onKeyDown={(e) => {
                if (e.key === "Enter") userLogin();
              }}
              onChange={(e) =>
                setLoginDetails({
                  username: e.target.value,
                  password: loginDetails.password,
                })
              }
            />
            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Password"
              value={loginDetails.password}
              onKeyDown={(e) => {
                if (e.key === "Enter") userLogin();
              }}
              onChange={(e) =>
                setLoginDetails({
                  username: loginDetails.username,
                  password: e.target.value,
                })
              }
            />
            <Form.Check className="mb-3" type="checkbox" label="Remember Me" />
            <Row>
              <Col className="text-center">
                <Button
                  variant="success"
                  type="button"
                  onClick={() => userLogin()}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};
