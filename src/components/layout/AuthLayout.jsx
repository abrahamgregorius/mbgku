import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
