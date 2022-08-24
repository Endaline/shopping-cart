import React from 'react'
import { data } from '../data'
import { toast } from 'react-toastify';


console.log(data,)
function Shop({addToCart}) {
  return (
    <div className="bg-slate-100 m-5 h-full ">
      <div className="  shadow-slate-100 p-3 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 ">
        {data.map((product) => (
          <div key={product.id} className='border-[2px] shadow-md max-w-[200px] h-[320px] bg-white rounded-md max-h-[350px] hover:shadow-md'>
            <div className="py-2 px-5">
              <img className='w-[100%] h-[150px] hover:scale-110 transition duration-300 '
                src={product.image}
                alt=""
              />
            </div>
            <div className="">
              <div className='py-4 px-4'>
                        <h1>{product.title.substring(0,16)}</h1>
                <div className="flex ">
                            <p className="font-bold">${product.price}</p>
                            <p className="px-4">{product.category}</p>
                </div>
              </div>
              <div className='flex justify-center border rounded-3xl py-2 px-4 mb-1 cursor-pointer bg-[#3f989e] text-white hover:bg-transparent hover:text-[#3f989e] transition duration-700 ease-in-out '>
                <button onClick={ ()=>addToCart(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
