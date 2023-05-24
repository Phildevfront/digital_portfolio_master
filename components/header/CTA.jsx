import React from 'react'
import './header.css'
import Link from 'next/link'


const CTA = () => {
  return (
    <div className='cta'>
        <Link href="/CV_PB.pdf" download className='btn' alt="alt text" target="_blank" rel="noopener noreferrer">Load CV</Link>
        <Link href='#contact' className='btn btn-primary'>Let's Talk</Link>
    </div>
  )
}

export default CTA