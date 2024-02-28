import React from 'react'
import Bounded from './Bounded'
import Link from 'next/link'
import clsx from 'clsx'
import { Facebook, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <Bounded>
        <div className='border-t-2 border-slate-700 pt-14 mx-auto flex flex-col items-center justify-between  sm:flex-row '>
            <div className="flex flex-col items-center gap-4 justify-center sm:flex-row sm:justify-self-start">
                <Link
                href="/"
                className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
              >
                Sreynin
              </Link>
              <p className=" text-sm text-slate-300 ">
                © 2024 Sreynin Pon
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 justify-center sm:flex-row">
              <span><Mail /></span>
              <p>sreyninpon@gmail.com</p>
            </div>
        </div>
    </Bounded>
  )
}

export default Footer