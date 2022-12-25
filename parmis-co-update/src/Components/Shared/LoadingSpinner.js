import React from "react";
import { ThreeDots } from "react-loader-spinner";
function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "1000px",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#00000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default LoadingSpinner;
