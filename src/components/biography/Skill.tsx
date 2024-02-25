import React from 'react'

const Skill = () => {
  return (
    <div className="relative h-[70vh]">
        <h1 className="absolute top-14 -z-10 text-slate-900 text-[300px] font-bold">
            Skills
        </h1>
        <div className='flex flex-col justify-center items-center h-full'>
            <ol className='flex flex-col justify-start leading-10 text-2xl'>
                <li>HTML-CSS-Javascript</li>
                <li>Typescript</li>
                <li>React-Next-Vue</li>
                <li>Nest.ja-Django</li>
                <li>Phython</li>
                <li>C-C#-Java</li>
            </ol>
        </div>
    </div>
  )
}

export default Skill