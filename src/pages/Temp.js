import React from "react";

const Home = ({ parentSize }) => {
  const { width, height } = parentSize;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "lightgray",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>
        Parent Size: Width = {width}px, Height = {height}px
      </p>
    </div>
  );
};

export default Home;
