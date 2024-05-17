import React from 'react'
import './Hero.css'
import heroVec from '@/assets/hero-vec.svg'
import heroImg from '@/assets/Shape.svg'
import Image from 'next/image'

function Hero() {
  return (
    <>
    <div className='hero'>
        <div>
            <h2>We help you <br /> grow your business faster</h2>
            <Image src={heroVec} style={{marginTop:-15,marginBottom: 20}}/>
            <p>Ehya is the Instagram analytics platform teams use to stay focused on the goals, track engagement for report your business .</p>
            <button>See how it works</button>
        </div>
        <Image src={heroImg}/>
    </div>
    </>
  )
}

export default Hero