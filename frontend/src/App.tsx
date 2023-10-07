
import { Route, Routes } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import Product from './page/Product'
import UserPage from './features/users/users'
import Register from './page/Register'
import Operational from './page/Oprational'

function App() {

  return (
    <>
    <Routes>
      <Route>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/payment" element={<UserPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/operational" element={<Operational/>} />
      </Route>
    </Routes>

    </>
  )
}

export default App
