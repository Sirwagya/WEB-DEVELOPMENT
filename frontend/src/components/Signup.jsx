import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const signup = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/signUp", formData);
    setMsg(response.data.msg);
  };
  return (
    <form onSubmit={signup}>
      <p>{msg}</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
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
      <input
        type="tel"
        name="mobile"
        onChange={handleChange}
        placeholder="mobile number"
        value={formData.mobile}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
