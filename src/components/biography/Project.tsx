import React from 'react'
import Image from 'next/image'
import ProjectTemp from '../project-temp'

const Project = () => {
  return (
    <div className="">
        <div className="relative h-[400px]">
            <h1 className="absolute top-14 -z-10 text-slate-900 text-[300px] font-bold">
                Projects
            </h1>
        </div>
        <div  className='flex flex-row gap-20 mb-10'>
            <h2 className=''>
                My Works
            </h2>
            <p className='text-slate-500'>Here my best work from my potfolio, you see them below.</p>
        </div>
        <ProjectTemp/>
    </div>
  )
}

export default Project