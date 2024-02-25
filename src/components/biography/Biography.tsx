import React from 'react'
import Heading from '../Heading'
import Image from 'next/image'

const Biography = () => {
  return (
    <div className='grid grid-1 md:grid-cols-2 gap-'>
      <Heading className="mb-10" as="h1" size="md">About Me</Heading>
      <Heading className="mb-10 mt-8" as="h3" size="sm" >Sreynin Pon</Heading>
      <div className="w-[450px] h-[550px] relative">
        <Image src="/Agility — Ricard Jorge.jpg" alt='image' fill className="w-full h-full object-cover"/>
      </div>
      <div className="">
        <p className="prose prose-xl prose-slate prose-invert text-slate-400 mb-20">
        Hi, my name is Manoj Karki, I am a designer working in visual communication, with a focus on interaction design & art direction. I love to create
        engaging, creative, and interactive app. My aim is to
        visualize your ideas through my development skills, by
        adding motion, I bring them life and make an impressive product.
        I Love Design, Code and Story.
        Design is not a job, design is a mindset. Specially structured and logical thinking.
        </p>
        <span className='text-xl text-white'>Read more</span>
      </div>
    </div>
  )
}

export default Biography