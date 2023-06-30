/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const Navigate = useNavigate();
  const { getUser} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handlesubmit for login
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/login", {
        email,
        password,
      })
      .then((response) => {
        getUser(response.data);

        console.log(response.data);
        alert("Successfully logged in!");
        Navigate("/");
      });
     
  };

  return (
    <section className="login-pic">
      <div className="container ">
        <div className="row text-center ">
          <div className="col-12 mt-3">
            <h1 className="para">
              <strong>LOGIN</strong>
            </h1>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3 ">
                <input
                  type="email"
                  className="form-control bg-transparent "
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="floatingInput">
                  <h4 className="para ">Email Address</h4>
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control bg-transparent"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="floatingPassword">
                  <h4 className="para">Password</h4>
                </label>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
