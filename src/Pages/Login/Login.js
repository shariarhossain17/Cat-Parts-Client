import React, { useEffect, useState } from 'react';
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import auth from "../../firebase.init";
import useToken from '../../Hooks/useToken';
import PageTitle from '../Shared/PageTitle';
import Spinner from '../Shared/Spinner';


const Login = () => {
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [user,loading,error]= useAuthState(auth)
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, Cuser, Cloading, Cerror] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, Ferror] =
    useSendPasswordResetEmail(auth);

    const [token] = useToken(user)
  //   signin email and pass
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    reset();
  };

  //   google sign in
  const signInGoogle = () => {
    signInWithGoogle();
  };
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if(token){
        navigate(from, { replace: true });
        Swal.fire({
            icon: 'success',
            title: 'login successful',
            showConfirmButton: false,
            timer: 1500
          })
      }
  },[token])

  let signError;

  if (Cerror || Gerror) {
    signError = (
      <p className="text-red-500 mb-2">{Cerror?.message || Gerror?.message}</p>
    );
  }
 if(Gloading || Cloading){
     return <Spinner></Spinner>
 }
  // forgotten password
  const forgottenPassword = () => {
    if (email) {
      sendPasswordResetEmail(email);
      Swal.fire({
        icon: 'success',
        title: 'Email send',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
        Swal.fire('plz provide your email')
    }
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <PageTitle title='login'></PageTitle>
      <div class="hero-content ">
        <div class="card max-w-sm  lg:w-96 shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "provided valid email",
                    },
                  })}
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password required",
                    },
                    minLength: {
                      value: 6,
                      message: "password must be 6 character",
                    },
                  })}
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                <label class="label">
                  <a
                    onClick={forgottenPassword}
                    href="#"
                    class="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              {signError}
              <div class="form-control mt-6">
                <button class="btn btn-md">Login</button>
              </div>
            </form>
            <p>
              You are new?{" "}
              <Link className="text-orange-500" to="/signup">
                Signup
              </Link>
            </p>
            <div class="divider">OR</div>
            <button onClick={signInGoogle} className="btn btn-md rounded-full">
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;