import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiFirebase, SiPostgresql, SiMongodb, SiSass, SiTailwindcss, SiMysql } from 'react-icons/si'
const Skills = () => {


  const skills = [
    {
      icon: <FaReact color={"#5ED3F3"} />,
      name: "React",
    },
    {
      icon: <IoLogoJavascript color={"#EFD81D"} />,
      name: "Javascript"
    },    
    {
      icon: <FaHtml5 color={"#DD4B25"} />,
      name: "HTML"
    },   
    {
      icon: <FaCss3 color={"#254BDD"} />,
      name: "CSS"
    },    
    {
      icon: <SiFirebase color={"#FFCB2B"} />,
      name: "Firebase"
    },    
    {
      icon: <FaNodeJs color={"#79AE60"} />,
      name: "NodeJS"
    },    
    {
      icon: <SiPostgresql color={"#336791"} />,
      name: "PostgreSQL"
    },  
    {
      icon: <SiMysql color={"#F79F12"} />,
      name: "MySQL"
    }, 
    {
      icon: <SiMongodb color={"#429543"} />,
      name: "MongoDB"
    },    
    {
      icon: <SiSass color={"#C76494"} />,
      name: "SCSS"
    },   
    {
      icon: <SiTailwindcss color={"#38BDF8"} />,
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
            skills.map(({name, icon, color}) => <Skill name={name} icon={icon} />)
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

