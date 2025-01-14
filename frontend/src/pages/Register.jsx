import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Background from './Background';

// Register.jsx
function Register() {
   const navigate = useNavigate();
   const [data, setData] = useState({ name: '', email: '', password: '' });

   const registerUser = async (e) => {
      e.preventDefault();
      const { name, email, password } = data;

      if (!name || !email || !password) {
         toast.error('All fields are required!');
         return;
      }

      try {
         const response = await axios.post('http://localhost:8000/register', { name, email, password });
         if (response.data.error) {
            toast.error(response.data.error);
         } else {
            setData({});
            toast.success('Registration successful!');
            navigate('/login');
         }
      } catch (error) {
         toast.error('Something went wrong!');
      }
   };

   return (
      <div>
           <Background/>
      <div className="card">
       
         <h2>Register</h2>
         <form onSubmit={registerUser}>
            <label>Name:</label>
            <input
               type="text"
               placeholder="Enter your name"
               value={data.name}
               onChange={(e) => setData({ ...data, name: e.target.value })}
            />
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
            <button type="submit">Submit</button>
         </form>
      </div>
      </div>
   );
}

export default Register;