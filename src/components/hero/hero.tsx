import React from 'react'
import Heading from '../Heading'

const Hero = () => {
  return (
    <div className='h-[90vh]'>
        <div  className='flex flex-col gap-y-32 justify-center items-center'>
            <div className='flex flex-col gap-y-10 justify-center items-center'>
                <Heading as="h1" size="xl">
                    Sreynin Pon
                </Heading>
                <h3 className='font-border text-5xl'>Creative developer</h3>
            </div>
        </div>
          
    </div>
  )
}

export default Hero