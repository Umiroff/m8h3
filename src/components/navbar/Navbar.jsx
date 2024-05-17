import React from 'react'
import './Navbar.css'
import Image from 'next/image'
import logo from '@/assets/Logo.svg'
import Link from 'next/link'

function Navbar() {
  return (
    <>
    <div className='nav'>
        <Link className='nav_link' href={'/'}>
            <Image src={logo}/>
        </Link>
        <div>
            <Link className='nav_link' href={'/'}>
                <p>Home</p>
            </Link>
            <select name="" id="">
                <option value="Landings">Landings</option>
            </select>
            <select name="" id="">
                <option value="Landings">Pages</option>
            </select>
            <Link className='nav_link' href={'/contact'}>
                <p>Contact</p>
            </Link>
            <p>Help</p>
            <button>Login</button>
        </div>
    </div>
    </>
  )
}

export default Navbar