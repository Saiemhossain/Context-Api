/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Shop from './components/Shop'
import CartPage from './components/CartPage';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </>
  );
}

export default App
