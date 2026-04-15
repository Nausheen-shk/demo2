import React from "react";
import flowers from "./assets/flowers.jpg";

function App() {
  return (
    <>
      <h1>Image from Assets</h1>
      <img src={flowers} alt="flower" width="300" />
    </>
  );
}

export default App;