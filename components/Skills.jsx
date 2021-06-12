import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiFirebase, SiPostgresql, SiMongodb, SiSass, SiTailwindcss, SiMysql } from 'react-icons/si'
const Skills = () => {


  const skills = [
    {
      icon: <FaReact  />,
      name: "React"
    },
    {
      icon: <IoLogoJavascript />,
      name: "Javascript"
    },    
    {
      icon: <FaHtml5 />,
      name: "HTML"
    },   
    {
      icon: <FaCss3 />,
      name: "CSS"
    },    
    {
      icon: <SiFirebase />,
      name: "Firebase"
    },    
    {
      icon: <FaNodeJs />,
      name: "NodeJS"
    },    
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL"
    },  
    {
      icon: <SiMysql />,
      name: "MySQL"
    }, 
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },    
    {
      icon: <SiSass />,
      name: "SCSS"
    },   
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS"
    }
  ]

  return (
    <section id="skills" className="w-full pt-20 ">
      <div className="w-10/12 md:w-6/12 m-auto">
        <h1 className="text-4xl text-black font-bold dark:text-white">Skills</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-400">These are some of the technologies I work with 🚀</p>
        <ul className="flex flex-wrap mt-2">
          {
            skills.map(({name, icon}) => <Skill name={name} icon={icon} />)
          }
        </ul>
      </div>
    </section>
  )
}

const Skill = ({icon, name}) => {
  return(
    <li className="flex items-center font-inter border border-gray-300 dark:border-gray-800 rounded-md w-min px-2 py-1 mx-1 my-1">
      <span className="text-lg mr-1 text-gray-600 dark:text-gray-300">
        {icon}
      </span>
      <p className="text-sm dark:text-gray-300">{name}</p>
    </li>
  )
}

export default Skills

