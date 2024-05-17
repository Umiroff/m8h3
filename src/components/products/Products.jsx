"use client"
import React from 'react'
import './Products.css'
import Image from 'next/image'

function Products({data}) {

    let items = data?.map(el => (
        <div key={el.id} className='pro_card'>
            <Image src={el.thumbnail} alt={el.title} width={230} height={230}/>
            <h4>{el.title}</h4>
            <p>$ {el.price}</p>
        </div>
    ))
  return (
    <>
        <div className='pro'>
            <h3>Products</h3>
            <div className='pro_wrapper'>
                {items}
            </div>
        </div>
    </>
  )
}

export default Products