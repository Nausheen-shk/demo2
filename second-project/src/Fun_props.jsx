import { useState } from "react";
import Child_fun from "./child_fun";

export default function Fun_props() {
  const [username, setuser] = useState("");
  const [email, setemail] = useState("");

  const getChange = () => {
    setuser("nausheen");
    setemail("nausheenshaikhgamil.com");
  };

  return (
    <>
      <Child_fun user={username} email={email} />
      <button onClick={getChange}>OK</button>
    </>
  );
}