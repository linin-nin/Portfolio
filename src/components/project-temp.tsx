import Image from 'next/image'
import React from 'react'
import { project } from '@/app/_data/project'
import Link from 'next/link'

const ProjectTemp = () => {
  return (
    < >
        {/* {
            project.slice(0, 1).map((item, index) => (
                <div key={index} className='py-20 border-t-2'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                        <h1 className='text-xl font-bold'>{item.id}/7</h1>
                        <h1></h1>
                        <h1 className='text-xl font-bold'>2024</h1>
                        <p>{item.header}</p>
                        <h1 className='text-4xl font-bold'>{item.project_name}</h1>
                        <p>{item.title}</p>
                    </div>
                    <div className='relative w-full h-[570px] mt-7 '>
                        <Image src={item.cover}alt="Startup nation" fill className='w-full h-full object-cover rounded-xl'/>
                    </div>
                </div>
            ))
        } */}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 border-b-2'>
        {
            project.map((item, index) => (
                <div key={index} className='py-20 border-t-2'>
                    <div className='grid grid-cols-1 gap-y-7'>
                        <h1 className='text-xl font-bold'>{item.id}/7</h1>
                        {/* <h1></h1>
                        <h1 className='text-xl'>2024</h1>
                        <p>{item.header}</p> */}
                        
                        <Link href={item.website}>
                            <h1 className='text-4xl font-bold hover:underline'>{item.project_name}</h1>
                        </Link>
                        
                    </div>
                    <div className='relative w-[510px]] h-[450px] my-7 rounded-xl'>
                        <Link href={item.website}>
                            <Image src={item.cover}alt="Startup nation" fill className='w-full h-full object-cover rounded-xl'/>
                        </Link>
                        
                    </div>
                    <p>{item.title}, 2024</p>
                </div>
            ))
        }
        </div>
    </>
  )
}

export default ProjectTemp