import React from "react";
import "daisyui/dist/full.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          <span className="animate-fade-in" id="digit1">
            4
          </span>
          <span className="animate-fade-in" id="digit2">
            0
          </span>
          <span className="animate-fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="animate-fade-in text-3xl mt-4">PAGE NOT FOUND</h3>
        <Link to="/">
          <button className="btn btn-primary mt-6">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
