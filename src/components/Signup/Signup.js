import Axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useLoginState } from "../../store/context";
import "./Signup.scss";

const Signup = () => {
  const [state, dispatch] = useLoginState();
  const history = useHistory();
  const { userName, email, password, passwordConfirm, error } = state;

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        userName,
        email,
        password,
        passwordConfirm,
      };
      await Axios.post("http://127.0.0.1:9000/api/v1/users/signup", newUser);
      const loginRes = await Axios.post(
        "http://127.0.0.1:9000/api/v1/users/login",
        {
          email,
          password,
        }
      );
      console.log(loginRes);
      dispatch({
        type: "success",
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/login");
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({ type: "error", message: err.response.data.message });
    }
  };
  return (
    <div className="signup">
      <div className="signup__container">
        <h3>Sign up</h3>
        {error && <p>{error}</p>}
        <form action="" onSubmit={createUser}>
          <h5>UserName</h5>
          <div className="signup__input">
            <input
              type="text"
              value={userName}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "userName",
                  value: e.currentTarget.value,
                })
              }
            />
          </div>
          <h5>Email Address</h5>
          <div className="signup__input">
            <input
              type="text"
              value={email}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "email",
                  value: e.currentTarget.value,
                })
              }
            />
          </div>
          <h5>Password</h5>
          <div className="signup__input">
            <input
              type="password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.currentTarget.value,
                })
              }
            />
          </div>
          <h5>Confirm Password</h5>
          <div className="signup__input">
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "passwordConfirm",
                  value: e.currentTarget.value,
                })
              }
            />
          </div>
          <button className="signup__container-signUpButton">Sign Up</button>
        </form>
        <p>
          By continuing, you agree to L&L's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="signup__footer">
        <p>Already have an account?</p>
        <Link to="/login">
          <button className="login__registerButton">Go to Log In Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
