import React from 'react'

const Education = () => {
  return (
    <div className="relative h-[70vh]">
        <h1 className="absolute top-14 -z-10 text-slate-900 text-[200px] font-bold">
            Education
        </h1>
        <div className='flex flex-col justify-center items-center h-full'>
            <ol className='flex flex-col justify-start leading-10 text-xl'>
                <li>
                    <h2 className='font-bold mb-2'>Computer Science and Engineering ( Bachelar&apos;s degree )</h2>
                    <p className=' mt-3'>At Royal University of Phnom Penh</p>
                    {/* <p className='prose prose-x l prose-slate prose-invert '>
                    In fontend, I specialize in Next js with React Query, and Tailwind CSS.
                    For animation in website, I use Framer motion and GSAP. Additionally, 
                    I include Directus handless CMS to manage database and API. I have completed 
                    websites by using language above I am response as frondend developer.
                    </p> */}
                    <p className='text-slate-500 mt-3'>2023-Present</p>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Education