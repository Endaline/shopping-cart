import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { createContext } from 'react'
import Cart from './Cart/Cart'
import Shop from './Cart/Shop'
// import TodoInput from './components/TodoInput';
import Footer from './Footer'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify'

export const CartContext = createContext([])
function App() {
  const [cartItem, setCartItem] = useState([])
  const addToCart = (product, id) => {
    //  check if same item in product is also in cartItem
    const productExist = cartItem.find((cartItem) => cartItem.id === product.id)
    console.log(productExist)
    // if is not add it
    if (productExist === undefined) {
      let newProduct = product
      newProduct.quantity += 1
      localStorage.setItem('cartItem', JSON.stringify(cartItem))
      setCartItem([...cartItem, product])
      //  if it is give an alert
    } else {
      let newProduct = product
      newProduct.quantity += 1
      let position = cartItem.indexOf(productExist)
      // let currCart = cartItem.map((item, itemId) => {
      //   console.log(item.id)
      //   console.log(product.id)
      //   console.log('test => ', item.id !== product.id)

      //   if (item.id === product.id) return newProduct
      //   else return item
      // })
      console.log(id)
      let newCart = [...cartItem]

      newCart[position] = product
      console.log(newCart)
      setCartItem([...newCart])

      // alert("Item is already in the cart")
      toast.warning(`${product.title} already in cart`, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }
  useEffect(() => {
    setCartItem(
      localStorage.getItem('cartItem')
        ? JSON.parse(localStorage.getItem('cartItem'))
        : [],
    )
  }, [])

  const handleDelete = (id) => {
    const newDelete = cartItem.filter((cart) => cart.id !== id)
    setCartItem(newDelete)
  }
  const handleDecrease = (product) => {
    let newProduct = product

    if (newProduct.quantity > 1) {
      newProduct.quantity -= 1

      const position = cartItem.indexOf(product)
      const newCartItem = cartItem
      newCartItem[position] = newProduct
      setCartItem([...newCartItem])
    }
    // newProduct.quantity -= 1
    // if (newProduct.quantity < 1) {
    //   console.log('less one')
    //   newProduct.quantity = 1
    // }
    // if(newProduct.quantity ===1 )
  }

  return (
    <div className="">
      <CartContext.Provider value={cartItem}>
        {/* <TodoInput />  */}

        <div>
          <ToastContainer />
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Shop addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  handleDelete={handleDelete}
                  addToCart={addToCart}
                  handleDecrease={handleDecrease}
                />
              }
            />
          </Routes>
          <div>
            <Footer />
          </div>
        </div>
      </CartContext.Provider>
    </div>
  )
}

export default App
