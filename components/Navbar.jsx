import React, { useEffect, useState } from 'react'
import { BsMoon } from 'react-icons/bs'
const Navbar = () => {
  // const [dark, isDark] = useState(localStorage.getItem('isDark'))
  useEffect(() => {
    const userPreference = localStorage.getItem('theme')

    const root = window.document.documentElement


    if(userPreference === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  },[])

  const togglePreference = () => {
    let userPreference = localStorage.getItem('theme')
  
    const root = window.document.documentElement
  
    if(userPreference === 'dark'){
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
  
  return (
    <nav className="w-full font-inter sticky top-0 duration-700 transition-all bg-white dark:bg-black-primary ">
      <div className="m-auto w-10/12 md:w-8/12 py-6  my-5 duration-700 transition-all  flex justify-between">
        <button className="px-3 py-3 rounded-sm bg-gray-300 dark:bg-gray-800 dark:text-white focus:outline-none" onClick={togglePreference} ><BsMoon /></button>
        <ul className="flex items-center">
          <li className="mx-2 font-normal text-gray-600 dark:text-gray-200">
            <a href="#about">
              About
            </a>
          </li>
          <li className="mx-2 font-normal text-gray-600 dark:text-gray-200">
          <a href="#skills">
              Skills
            </a>
          </li>
          <li className="mx-2 font-normal text-gray-600 dark:text-gray-200">
          <a href="#projects">
              Projects
            </a>
          </li>
          <li className="mx-2 font-normal text-gray-600 dark:text-gray-200">
          <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
