import React from "react";

function Home() {
  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          fontSize: "2.5rem",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        Tua mãe é minha se você da uma risadinha
      </h1>
    </div>
  );
}

export default Home;
