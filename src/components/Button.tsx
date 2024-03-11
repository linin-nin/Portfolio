import React from 'react'
import clsx from 'clsx'
import  { ArrowUpRight } from "lucide-react"
import Link from 'next/link';


type ButtonProps = {
    linkField: string;
    label: string;
    showIcon?: boolean;
    className?: string

}


const Button = ({linkField, label, showIcon = true, className}:ButtonProps) => {
  return (
    <button className={clsx("group relative flex text-slate-800 w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105", className)}>
        <Link href={linkField}>
          <span className='absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
          <span className='relative flex items-center justify-center gap-2'>
            {label} {showIcon && <ArrowUpRight className='inline-block'/>}
          </span>
        </Link>
    </button>
  )
}

export default Button