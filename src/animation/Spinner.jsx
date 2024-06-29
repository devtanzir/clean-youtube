// src/components/LottieAnimation.js
import React from "react";
import Lottie from "lottie-react";
import loader from "../lottie_json/Animation - 1719490657893.json"; // Adjust the path as needed

const Spinner = () => {
  return (
    <>
      <Lottie
        animationData={loader}
        loop
        autoplay
        style={{ width: 60, height: 36 }}
      />
    </>
  );
};

export default Spinner;
