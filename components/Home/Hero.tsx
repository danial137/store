import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full min-h-[calc(100vh-12vh)] flex justify-center flex-col py-8 md:py-12'>
      {/* define grid */}
      <div className='w-11/12 sm:w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>

        {/* content */}
        <div className=''>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase'>
            mega sale <span className='text-rose-600'>Special </span> offer up to{" "}
            <span className='text-orange-600 pl-1'>60%</span>{" "}
            off in <span className='pl-1 text-rose-500'>persian store</span>
          </h1>
          <p className='text-sm md:text-base lg:text-lg text-black opacity-70 mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est quibusdam facere nesciunt, expedita numquam! Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <div className='flex mt-6 items-center space-x-4'>
            <Button size={"lg"} className='bg-blue-700'>Shop Now</Button>
            <Button size={'lg'}>Explore More</Button>
          </div>
        </div>

        {/* image content */}
        <div className='flex justify-center lg:block'>
          <Image
            src="/images/hero.svg"
            alt="Hero"
            width={600}
            height={600}
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[80%] h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
