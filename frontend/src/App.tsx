
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './pages/login'
import RegisterForm from './pages/register'

function App() {


  return (
    <>
    <Routes> 
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
