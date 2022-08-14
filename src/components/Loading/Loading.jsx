import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
          background: "var(--white)",
        }}
        className="container text-center"
      >
        <h2>Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
