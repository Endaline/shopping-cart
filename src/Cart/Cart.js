import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {useContext} from 'react'
import { CartContext } from '../App';

function Cart({ handleDelete,addToCart,handleDecrease}) {
  const cartItem = useContext(CartContext)
  // const tot = cartItem.reduce((price, cart, id) =>price.id  === cart .id ? price + cart.quantity * cart.price,0 : "")
  // here toFixed is making it to be in 4 decimal places
  const total = cartItem.reduce((price,cart)=> price + cart.quantity * cart.price,0).toFixed(4)
  return (

    <div className="bg-slate-100 m-5 h-screen ">
      <div className='flex justify-center items-center text-[#3f989e] py-3 '>
        {cartItem.length === 0 ? <div><h2> Cart is empty </h2> <div className='py-2 mt-7 flex justify-center border rounded-3xl  px-4 mb-1 cursor-pointer bg-[#3f989e] text-white hover:bg-transparent hover:text-[#3f989e] transition duration-700 ease-in-out'> <Link to = "/"> <h3 className=' font-bold'> </h3>Start Shopping  </Link> </div> </div> : ""}
        
    </div>
      <div className="  shadow-slate-100 p-3  ">
        {cartItem?.map((cart) => (
          <div key={cart.id} className="border-[2px] mt-3 bg-white rounded-md justify-between px-3 flex items-center">
            <div className="py-2 px-3 ">
              <img
                className="w-[100%] max-w-[100px] h-[100px] hover:scale-110 transition duration-300 "
                src={cart.image}
                alt=""
              />
            </div>
            <div className=" flex max-w-[260px]">
              <div className="py-2 px-4">
                <h1>{cart.title}</h1>
                <div className="flex ">
                  <p className='font-bold'> Price: ${cart.price*cart.quantity}</p>
                  <p className="px-4">{cart.category}</p>
                </div>
              </div>
              
            </div>
            <div className='flex items-center '>
              <div className='flex items-center px-8'>
                 {/* {tot} */}
                <button onClick={()=>handleDecrease(cart)} className='w-[30px] h-[30px]  border rounded-full items-center pb-5 font-bold text-xl'>-</button>
                <p className='px-4 text-[#3f989e] font-bold text-xl'>{cart.quantity}</p>
                <button onClick={()=>addToCart(cart)} className='w-[30px] h-[30px]  border rounded-full items-center pb-5 font-bold text-lg  '>+</button>
              </div>
                 <div className="flex justify-center border rounded-3xl py-2 px-4 mb-1 cursor-pointer bg-[#3f989e] text-white hover:bg-transparent hover:text-[#3f989e] transition duration-700 ease-in-out ">
                <button onClick={()=> handleDelete (cart.id)}>Remove</button>
              </div>
             
            </div>
           
          </div>
        ))}
      </div>
      <div>
        {cartItem.length === 0? " " :  <div className='flex justify-between py-4 px-10'>
          <h2>Total Price</h2>
          <p>${total}</p>
        </div>}
       
      </div>
    </div>
  )
}

export default Cart
