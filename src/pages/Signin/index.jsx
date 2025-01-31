import { Button, Input } from "../../components";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {  Content,  Label, LabelSignin,  Strong,  Container,} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FaRoute } from "react-icons/fa";
import { errorNotification,} from "../../services/notification";

const Signin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();


  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = (loginForm) => {
    login(loginForm)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        errorNotification(err.code + " " + err.response.data.message);
      });
  };

  return (
    <Container height="100vh">
      <Content>
        <Label style={{ fontSize: "30px" }}>
          <FaRoute style={{ color: "#2F9B2C" }} /> Trail Routes
        </Label>
        <LabelSignin>
          Welcome back
          <br />
          Sign in and start exploring
        </LabelSignin>
        <Input
          type="email"
          placeholder="Enter your email address"
          name="username"
          value={loginForm.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
        />
        <Button
          Text="Sign In"
          color="#2F9B2C"
          onClick={() => handleSignIn(loginForm)}
        ></Button>
        <LabelSignin>
          Don't have an account?
          <Strong>
            <Link to="/signup">&nbsp;Sign up</Link>
          </Strong>
        </LabelSignin>
      </Content>
    </Container>
  );
};

export default Signin;
