import axios from "axios";
import { useState } from "react";

const Signin = () => {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const signin = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/signin", formData);
    setMsg(response.data.msg);
  };
  return (
    <form onSubmit={signin}>
      <p>{msg}</p>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="password"
        value={formData.password}
      />

      <button type="submit">Sign In</button>
    </form>
  );
};

export default Signin;
