import React from 'react'

const Hero = () => {
  return (
    <section className="w-full ">
      <div className="w-10/12 md:w-6/12 m-auto">
        <h2 className="text-sm md:text-md text-gray-600 dark:text-gray-400">
            Hey there, I am
        </h2>
        <h1 className=" text-4xl md:text-6xl text-black font-black dark:text-white">Joshua Tauro</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-400 ">I am a 17 year old <span className="text-blue-700 dark:text-blue-400">Fullstack Developer</span> who loves to convert dreams into reality. I am currently in high school, but still open to new and exciting opportunities 🔥</p>
      </div>
    </section>
  )
}

export default Hero
