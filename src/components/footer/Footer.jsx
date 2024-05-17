import React from 'react'
import './Footer.css'
import Image from 'next/image'
import logo from '@/assets/Logo.svg'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer_logo'>
            <Image src={logo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam pariatur consequuntur, corporis fugit maxime ipsam harum labore illum cum, in, id </p>
        </div>
        <div className='footer_con'>
            <p style={{fontSize: 16,marginBottom:30,fontWeight: 600}}>Contact Us</p>
            <p>E:info@example.com</p>
            <p>P:+94 7670000000</p>
            <p>A:123 Hospital rd</p>
            <p>Kalubowila, Dehiwela</p>
        </div>
        <div className='footer_con'>
            <p style={{fontSize: 16,marginBottom:30,fontWeight: 600}}>Useful links</p>
            <p>Shop All</p>
            <p>Tempered glass</p>
            <p>Back-cover</p>
            <p>About us</p>
        </div>
        <div className='footer_soc'>
            <p>Whatsapp</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Tik tok</p>
        </div>
    </div>
    </>
  )
}

export default Footer