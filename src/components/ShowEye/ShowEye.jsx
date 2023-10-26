import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const ShowEye = ({ eyeState, updateEye }) => {
  return eyeState ? (
    <AiFillEye
      className="fs-5 position-absolute end-0 top-50 eye"
      onClick={() => {
        updateEye(false);
      }}
    />
  ) : (
    <AiFillEyeInvisible
      className="fs-5 position-absolute end-0 top-50 eye"
      onClick={() => {
        updateEye(true);
      }}
    />
  );
};

export default ShowEye;
