import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'
import { useContext } from 'react'
import { CartContext } from './App'

function Header() {
  const cartItem = useContext(CartContext)
  console.log(cartItem)
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'bold',
      color: isActive ? '#fff' : '#000',
    }
  }
  return (
    <nav className="primary-nav w-full flex justify-between bg-[#1b8188] items-center p-5 shadow-md">
      <div className="hover:shadow-md p-2 hover:bg-[#3f989e] transition duration-700 ease-in-out">
        <NavLink style={navLinkStyles} to="/">
          Endaline
        </NavLink>
      </div>

      <div className=" flex items-center">
        <div className="hover:shadow-md px-3 py-2 hover:bg-[#3f989e] transition duration-700 ease-in-out">
          <NavLink style={navLinkStyles} to="/">
            Shop
          </NavLink>
        </div>
        <div className="hover:shadow-md px-3 py-2 hover:bg-[#3f989e] relative text-xl text-white transition duration-700 ease-in-out">
          <NavLink style={navLinkStyles} to="/cart">
            <BsFillCartFill />
          </NavLink>
          <div className="absolute bottom-6 left-8">
            {/* here l am increaming the quantity in both cart and in cart quantity without duplicating it in the cart */}
            <p>{cartItem.reduce((total, item) => total + item.quantity, 0)}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
