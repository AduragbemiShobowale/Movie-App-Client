import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ShowEye from "../../components/ShowEye/ShowEye";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../utils/Spinner";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState(false);

  const { handleRegisterUser, authenticating } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const btnText = authenticating ? <Spinner /> : "Login to your account";

  const onSubmit = (data) => {
    handleRegisterUser(data);
  };

  return (
    <div className="signup text-start">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="d-flex flex-column gap-3 custom-bg-light-grey p-4 p-sm-5 rounded-3"
      >
        <h2>Sign Up</h2>
        <div className="position-relative ">
          <input
            type="text"
            placeholder="Email Address"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.email ? "error" : ""
            }`}
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-2">
              Can't be empty
            </span>
          ) : null}
        </div>

        <div className="position-relative">
          <input
            type={passwordVisible ? "text" : "password"}
            autoComplete="true"
            placeholder="Password"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.password ? "error" : ""
            }`}
            {...register("password", { required: true })}
          />
          {/* <ShowEye eyeState={passwordVisible} updateEye={setPasswordVisible} /> */}
          {errors.password && errors.password.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-2">
              Can't be empty
            </span>
          ) : null}
        </div>

        <div className="position-relative">
          <input
            type={passwordRepeatVisible ? "text" : "password"}
            autoComplete="true"
            placeholder="Repeat Password"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.repeatPassword ? "error" : ""
            }`}
            {...register("repeatPassword", { required: true })}
          />
          {/* <ShowEye
            eyeState={passwordRepeatVisible}
            updateEye={setPasswordRepeatVisible}
          /> */}
          {errors.repeatPassword &&
          errors.repeatPassword.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-2">
              Cant be empty
            </span>
          ) : null}
        </div>

        <button className="custom-bg-red border-0 py-3  rounded-2 my-4">
          {btnText}
        </button>

        <p className="text-center">
          Already have an account?
          <Link
            to="/signin"
            className="text-decoration-none custom-text-red ps-2"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
