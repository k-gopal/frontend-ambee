import React, { useState, useEffect } from "react";
import { postRequest } from "../../servces";

const SignUp = ({ handleLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleChange = async () => {
    let result = await postRequest("/auth/signUp", {
      name,
      email,
      password,
    });
    if (result?.data?.payload?.token) {
      localStorage.setItem("token", result.data.payload.token);
      handleLoggedIn(true);
    }
  };
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-6">
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <h3 className="text-dark fw-bold">SignUp</h3>
          <hr />
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              onClick={() => handleChange()}
              className="btn btn-primary my-3"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
