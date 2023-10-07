
import { Route, Routes } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import Product from './page/Product'
import UserPage from './features/users/users'
import ProductId from './Component/productComponen/ProductId'

function App() {

  return (
    <>
    <Routes>
      <Route>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/operational" element={<h1>Operational</h1>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<ProductId/>} />
        <Route path="/payment" element={<UserPage/>} />
      </Route>
    </Routes>

    </>
  )
}

export default App
