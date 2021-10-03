import React from "react";

const MyLoading = ({ magin }) => {
  return (
    <div className="text-center" style={{ margin: magin || "0px" }}>
      <div
        className="spinner-border spinner-border-sm text-dark"
        role="status"
      ></div>
    </div>
  );
};

export default MyLoading;
