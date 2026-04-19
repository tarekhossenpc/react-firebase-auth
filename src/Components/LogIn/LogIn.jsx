import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../../Firebase/firebase.init";

const LogIn = () => {
  const handleLogInForm = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
    signInWithEmailAndPassword(auth,email,password).then(result=>{
      console.log(result.user)
    }).catch(error=>{
      console.log(error.massage)
    })

  }
  return (
   <div className="card bg-base-100 mt-5 m-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl mx-auto font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogInForm}>
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
            <div  className="mx-auto" >
              <p >
                New to our Website? Please{" "}
                <Link
                  className=" text-blue-300 hover:text-green-400 text-xl font-bold "
                  to="/Register"
                >
                  Register
                </Link>{" "}
              </p>
            </div>
            <button className="btn btn-neutral mt-4">LogIn</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
