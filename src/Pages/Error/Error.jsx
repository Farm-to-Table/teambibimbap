import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/404.png";

const Error = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="text-center">
        <img
          src={errorImage}
          alt="404 Error"
          className="mx-auto w-full max-w-xs mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-error mb-4">404</h1>
        <p className="text-xl md:text-2xl mb-8">Oops! Page not found.</p>
        <Link to="/teambibimbap/" className="btn btn-primary">
          Go back to main
        </Link>
      </div>
    </div>
  );
};

export default Error;
