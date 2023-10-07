
import { Route, Routes } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import Product from './page/Product'
import UserPage from './features/users/users'
import Operational from './page/Oprational'
import Register from './page/Register'
import Login from './page/Login'

// import ProductId from './Component/productComponen/ProductId'

function App() {

  return (
    <>
    
    <Routes>
      <Route>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/product" element={<Product/>} />
        {/* <Route path="/product/:id" element={<ProductId/>} /> */}
        <Route path="/payment" element={<UserPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/operational" element={<Operational/>} />
        <Route path="/login" element={<Login/>} />
      </Route>
    </Routes>

    </>
  )
}

export default App
