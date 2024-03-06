import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux-auth/UserSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       dispatch(loginUser({
        email: email,
        password: password,
        loginType: "member",
        partner: "juaaree",
        source: "mobile",
        deviceID: "djfreg839458934sbdewr",
        deviceToken: "enfjrhfiuherughrgu9834976543976983476"
      }));
      navigate('/home');
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
  
<div className=' w-72 m-auto h-60  rounded-md text-center py-5 mt-52'> 
<form className=' flex flex-col border  text-center bg-slate-200' onSubmit={handleSubmit}>
<input type='text' className='my-5 w-56 m-auto rounded-md pl-2 py-1' required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Name'/>
   <input type='password' className='my-5 w-56  m-auto rounded-md pl-2 py-1' required placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
   <button className='mt-4 px-3 bg-slate-500 w-20 m-auto rounded-md mb-4' type='submit'>
    Login</button>
    {error && (
        <div>{error}</div>
    )}
</form>
</div>
</div>
)
}

export default Login
