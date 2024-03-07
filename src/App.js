import React,{useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import { useDispatch } from 'react-redux'
import { setUser } from './Redux-auth/UserSlice'
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      dispatch(setUser(parsedUser));
    }
  }, [dispatch]);
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
