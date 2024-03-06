import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
const App = () => {
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
