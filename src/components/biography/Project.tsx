import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
        <div className="relative h-[400px]">
            <h1 className="absolute top-14 -z-10 text-slate-900 text-[300px] font-bold">
                Projects
            </h1>
        </div>
        <div className='flex flex-row gap-20  mb-16 border-b-2 py-10'>
            <h2 className=''>
                My Works
            </h2>
            <p className='text-slate-500'>Here my best work from my potfolio, you see them below.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            <h1>1/7</h1>
            <h1></h1>
            <h1 className=''>2024</h1>
            <p>LMS website</p>
            <h1>Learning management</h1>
            <p>Personal portfolio. Purpose- built for own branding</p>
        </div>
        <div className='relative w-full h-[570px] mt-7'>
            <Image src="/Agility — Ricard Jorge.jpg" alt="image" fill className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default Project