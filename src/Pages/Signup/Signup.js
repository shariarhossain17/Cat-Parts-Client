import React from 'react';
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from '../Shared/Spinner';

  
  const Signup = () => {
      const [user,loading,error] = useAuthState(auth)
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = useForm();
    //   google sign
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    //   crete user
    const [createUserWithEmailAndPassword, Cuser, Cloading, Cerror] =
      useCreateUserWithEmailAndPassword(auth);
  
    //   profile updated
    const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
    // create user
    const onSubmit = async (data) => {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      reset();
    };
  
    //   google sign in
    const signInGoogle = () => {
      signInWithGoogle();
    };
  
    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";
    if(user){
      navigate(from, { replace: true });
    }
    if(Gloading || Cloading){
      return <Spinner></Spinner>
  }
    // show firebase error
    let signError;
  
    if (Cerror || Gerror) {
      signError = (
        <p className="text-red-500 mb-2">{Cerror?.message || Gerror?.message}</p>
      );
    }
    return (
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content ">
          <div class="card max-w-sm  lg:w-96 shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name required",
                      },
                    })}
                    placeholder='your name'
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
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
                </div>
                {signError}
                <div class="form-control mt-6">
                  <button class="btn btn-md">Signup</button>
                </div>
              </form>
              <p>
                You Have alredy account?{" "}
                <Link className="text-orange-500" to="/login">
                  Login
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

export default Signup;