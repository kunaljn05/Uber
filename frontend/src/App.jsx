import './App.css'
import {Routes,Route} from "react-router-dom";
import Home from "./pages/app/Home.jsx";
import UserLogin from "./pages/user/UserLogin.jsx";
import UserSignUp from "./pages/user/UserSignUp.jsx";
import CaptianLogin from "./pages/captian/CaptianLogin.jsx";
import CaptianSignUp from "./pages/captian/CaptianSignUp.jsx";
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signUp' element={<UserSignUp/>}/>
      <Route path='/captian-login' element={<CaptianLogin/>}/>
      <Route path='/captian-signUp' element={<CaptianSignUp/>}/>
    </Routes>
    </>
  )
}

export default App
