import React from 'react'
import Heading from '../Heading'
import Bounded from '../Bounded'
import Ellipse from './Ellipse'

const Hero = () => {
  return (
    <div className='h-[90vh]'>
        <div  className='flex flex-col gap-y-32 justify-center items-center'>
            <div className='flex flex-col gap-y-10 justify-center items-center'>
                <Heading as="h1" size="lg">
                    Sreynin Pon
                </Heading>
                <h3 className='text-3xl text-border'>Creative developer</h3>
            </div>
            <Ellipse/>
        </div>
    </div>
  )
}

export default Hero