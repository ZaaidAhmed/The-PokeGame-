
import React, { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Background from "./Background";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data } = await axios.post('http://localhost:8000/login', {
        email, password
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login successful!");
        console.log('Login Success', data); 
        navigate('/game');  // Redirect to the game page after successful login
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <div>
      <Background/>
    
    <div className="login-container">
      <form onSubmit={loginUser}>
        <label>Email:</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={data.email} 
          onChange={(e) => setData({ ...data, email: e.target.value })} 
        />

        <label>Password:</label>
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={data.password} 
          onChange={(e) => setData({ ...data, password: e.target.value })} 
        />

        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;