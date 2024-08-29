import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between items-center gap-4'>
    <div className='flex items-center gap-3'>
      <h1 className='font-bold text-xl bg-sky-500 text-white px-3 py-4 rounded'>S</h1>
      <p className='font-bold text-xl hover:text-sky-500'>
        Sonia
      </p>
    </div>

    <div className='flex gap-4 px-4'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About Me</Link>
    </div>
  </div>
  )
}

export default Header