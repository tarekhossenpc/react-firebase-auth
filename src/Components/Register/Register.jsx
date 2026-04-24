// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router";
// import { auth } from "./../../Firebase/firebase.init";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Register = () => {
  const { name, handleRegister } = useContext(AuthContext);
  console.log(name, handleRegister);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    handleRegister(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="card bg-base-100 mt-5 m-auto w-full max-w-sm shrink-0 shadow-2xl">
      <title>Register Page</title>
      <h1 className="text-3xl mx-auto font-bold">Registration now!</h1>
      <div className="card-body">
        <form onSubmit={handleFormSubmit}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div className="mx-auto">
              <p>
                Have an account? Please{" "}
                <Link
                  className=" text-blue-300 hover:text-green-400 text-xl font-bold "
                  to="/Login"
                >
                  Login
                </Link>{" "}
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
