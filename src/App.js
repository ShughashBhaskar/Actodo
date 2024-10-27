import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Signup';
import Login from './pages/login';
import Landing from './pages/landing';
import { useState } from 'react';



function App() {
  const [user,setuser] = useState([
    {
        username : "John",
        password : "123"
  
    }
  ])
  return (
    <>
    <BrowserRouter>

      <Routes>
      <Route path='/' element={<Login user={user} setuser={setuser}></Login>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
      <Route path='/signup' element={<SignUp user={user} setuser={setuser}></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
