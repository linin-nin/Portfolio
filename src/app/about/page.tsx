import React from 'react'
import Bounded from '@/components/Bounded'
import Avatar from '@/components/biography/Avatar'
import Heading from '@/components/Heading'

const Page = () => {
  return (
    <Bounded>
       <div className='grid grid-cols-2'>
            <div className=''>
                <Avatar image='/Agility — Ricard Jorge.jpg' />
                <div className='flex flex-col justify-center items-center'>
                    <div className='border-2 px-4 py-12 mt-40 rounded-full'>
                        Hello World
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-11'>
                <Heading as="h1" size='lg'>Sreynin,</Heading>
                <Heading as="h2" size='sm'>A bit about myself</Heading>
                <Heading as="h2" size='sm'>Just about</Heading>
                <p className='text-slate-400'>What I do</p>
                <p className='text-slate-400'>My experience, <br/> collaboration, and <br/> own vibes <br/> for sure.</p>
                <Heading as="h2" size='sm'>So,</Heading>
                <p className='text-slate-400 mb-11'>
                I’m Manoj  — Web Designer with an designer background. Being a self-taught designer/programmer, 
                I have intention to perfect my every projects and I love designing that has to do with product 
                & visual design, mobile & web projects as well as branding, typography, and animations. With my 
                experience, I know how to help clients, solve real business cases and grow their businesses by 
                using design thinking. I love story (out of context).<br/><br/>
                In 2019, I started working as a web designer, UI/UX designer as an individual, and I am providing 
                one-stop support for photography, design, and coding. My background in graphic design gave me solid 
                typography, color theory, and visual communication skills, all of which I bring to my work on digital 
                products and websites.
                </p>
            </div>  
       </div>
       <div className='grid grid-cols-3 gap-10 border-t-2'>
            <div className='flex flex-col gap-3 mt-11'>
                <h3 className='text-slate-400'>Education</h3>
                <p>Royal University of Phnom Penh ( Bachelore )</p>
                <p>2022 - Present</p>
                <p>Computer Science</p>
            </div>
            <div className='flex flex-col gap-3 mt-11'>
                <h3 className='text-slate-400'>Skills</h3>
                <p>Typescript</p>
                <p>HTMl</p>
                <p>Tailwind</p>
                <p>React.js</p>
                <p>Vue.js</p>
                <p>Javascript</p>
                <p>CSS</p>
                <p>Next.js</p>
            </div>
            <div className='flex flex-col gap-3 mt-11'>
                <h3 className='text-slate-400'>Experiences</h3>
                <p>Web Developer</p>
                <p>2023-Present</p>
                <p>Full Stack</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-slate-400'>Contact</h3>
                <p>sreynin@gmail.com</p>
                <p>( 855 ) 90740733</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-slate-400'>Social</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
            </div>
       </div>
    </Bounded>
  )
}

export default Page