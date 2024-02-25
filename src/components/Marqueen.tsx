"use client"

import React, { useEffect, useRef } from 'react'

import {  Minus } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Iuse = [
    "contact",
    "contact"
  ]


const TechList = () => {
    const component = useRef(null)
    useEffect(() => {
        if(component.current){
            let ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: component.current,
                        // markers: true,   
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 4
                    }
                })

                tl.fromTo(".tech-row", {
                    x: (index) => {
                        return index % 2 == 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)
                    }
                },{
                    x: (index) => {
                        return index % 2 == 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)
                    },
                    ease: "power1.inOut"
                })
            })
            return () => ctx.revert()
        }
    })


  return (
    <section className='overflow-hidden' ref={component}>
        <div>
            {Iuse.map((name, index) => (
                <div key={index} className='tech-row mb-8 flex items-center justify-center gap-4 text-slate-700'>
                    {Array.from({length: 15}, (_, index) => (
                        <React.Fragment key={index}>
                            <span className='tech_item text-[150px] font-border-mar text-slate-700  uppercase tracking-tighter' 
                            >
                                {name}
                            </span>
                            <span className='text-3xl'>
                                <Minus />
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechList