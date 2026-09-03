import { useState } from "react";
import axios from "axios";

const IsAdmin = () => {
  const [msg, setMsg] = useState("");
  const checkAdmin = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3000/admin", {
      headers: {
        Authorization: token,
      },
    });
    setMsg(response.data.msg);
  };
  return (
    <>
      <p>{msg}</p>
      <button onClick={checkAdmin}>is Admin</button>
    </>
  );
};

export default IsAdmin;
