import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar'

const Cart = () => {

    const cartStore = useSelector(store=>store.cartStore)
    const cartItems = cartStore.cart_items

    
  return (
    <div>
        <Navbar/>
        <div className='text-center px-5 mx-5'>
            <h1 className='border text-warning bg-dark w-100'>CART ITEMS</h1>
        </div>
        <div className='container '>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
                <table className='table'>
                    <thead>
                        <tr className='border border-2 text-center'>
                            <th>S.No.</th>
                            <th>Product Image</th>
                            <th>Product Info</th>
                            <th>Price </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='border border-3 text-center'>
                        { 
                            cartItems.map((item,i)=>{
                                return <tr key={item.product.id}>
                                    <td className='p-2 text-center fw-bold'>{i+1}</td>
                                    <td>
                                        <img src={item.product.item_image} style={{height:"120px"}} alt="..."/>
                                    </td>
                                    <td>
                                        <h5  className='p-2'>{item.product.item_name}</h5>
                                    </td>
                                    <td>
                                        <h3 className='p-2 bg-warning'>{item.product.item_price}</h3>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Cart