import React from 'react'
import Link from 'next/link'
import { navbar } from '@/app/_data'
import Bounded from './Bounded'

const Header = () => {
  return (
    <Bounded className=''>
        <nav className='text-white font-bold uppercase flex justify-between items-center py-3 px-5 rounded-xl'>
            <div className='text-2xl'>
                <Link href="/" aria-label='Home page'>
                    Sreynin Pon
                </Link>
            </div>
            <ul className='flex gap-6 items-center justify-center'>
                {
                    navbar.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className='hover:text-red-400'>
                                {item.navName}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </Bounded>
  )
}

export default Header