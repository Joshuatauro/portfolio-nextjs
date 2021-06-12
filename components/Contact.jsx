import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 ">
      <div className="w-10/12 md:w-6/12 m-auto">
        <h1 className="text-4xl text-black font-bold dark:text-white">Contact Me</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-400">Feel free to reach out to me, be it for an opportunity or just feel like saying hi, my inbox is always open, I'll try my best to get back to you 💘</p>
        <div className="flex w-full my-4">
          <a href="mailto:joshuatauro45@gmail.com" className="py-4 px-6 focus:outline-none rounded-md bg-gray-300 dark:bg-gray-800 dark:text-white">Say hello</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
