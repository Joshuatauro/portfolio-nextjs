import React from 'react'
import { SiGithub } from 'react-icons/si'
import Badge from './Badge'

const Projects = () => {

  const projects = [
    {
      title: "Andha",
      desc: "A fullstack app where users can share company related details anonymously as well as leave reviews of companies, see top companies to work for as well as rate them on basis of work life balance, also features a jobs board where users can apply/search/add jobs",
      skills: ['TailwindCSS', 'Express', 'PostgreSQL', 'React'],
      liveLink: "https://andha-app.herokuapp.com",
      githubLink: "https://github.com/joshuatauro/andha",
      isUnderDevelopment: false
    },
    {
      title: "Alpha",
      desc: "A fullstack ecommerce store meant for gaming accessories. Has features ranging from viewing, filtering multiple products based on certain parameters, ordering/adding products to wishlist. Users have ability to leave reviews for products they have ordered, view previous orders and add multiple address/card details.",
      skills: ['TailwindCSS', 'Express', 'PostgreSQL', 'React'],
      liveLink: "https://andha-app.herokuapp.com",
      githubLink: "https://github.com/Joshuatauro/alpha-store",
      isUnderDevelopment: true
    },    
    {
      title: "AlphaAdmin",
      desc: "A full fledged ecommerce admin dashboard, which provides the latest statistics on how Alpha is doing like Total orders, New signups, Total Profit. Also features various other functionalities such as the ability to add/edit products, add new users/give admin role to new users, handle delivery status of orders and so much more.",
      skills: ['TailwindCSS', 'NextJS'],
      liveLink: "",
      githubLink: "https://github.com/Joshuatauro/admin-dashboard",
      isUnderDevelopment: true
    },
    {
      title: "Tailwindify",
      desc: "A component library with custom made components ranging from Navbars to Forms to Landing page kits built on top of TailwindCSS which can be used in projects with the help of simple copy-paste, it currently is in development but new components are being added daily",
      skills: ['TailwindCSS', 'NextJS'],
      liveLink: "https://tailwindify.vercel.app",
      githubLink: "https://github.com/joshuatauro/tailwindify",
      isUnderDevelopment: false
    },
    
  ]

  return (
    <section id="projects" className="w-full pt-20 ">
      <div className="w-10/12 md:w-6/12 m-auto">
        <h1 className="text-4xl text-black font-bold dark:text-white">Projects</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-400">These are few of my recent projects that i've worked on, some might be under development right now 😅. You can check all my projects at my <a href="https://github.com/joshuatauro" target="_blank" rel="noreferrer nofollow" className="text-blue-600 dark:text-blue-400 underline">Github</a>.</p>
        {
          projects.map(({isUnderDevelopment, title, desc, skills, githubLink, liveLink}) => <Project title={title} desc={desc} githubLink={githubLink} skills={skills} liveLink={liveLink} isUnderDevelopment={isUnderDevelopment} />)
        }
      </div>
    </section>
  )
}

const Project = ({title, desc, skills, githubLink, liveLink, isUnderDevelopment}) => {
  return(
    <div className="w-full border border-gray-300 rounded-md shadow-sm  duration-300 transition-all my-4">
      <div className="w-11/12 pt-4 m-auto">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center">
          {
            isUnderDevelopment ? (
                <h1 className="text-lg font-medium text-black dark:text-white">{title}</h1>
            ) : (
              <a href={liveLink} target="_blank" rel="noreferrer nofollow text-blue-600">
                <h1 className="text-lg  text-blue-600 dark:text-blue-400 underline">{title}</h1>
              </a>
            )
          }
          
          {
            isUnderDevelopment && (
              <Badge underDevelopment={isUnderDevelopment} />
            )
          }
          </div>
          <a href={githubLink} target="_blank" rel="noreferrer nofollow">
            <SiGithub size={20} className="text-black dark:text-white" />
          </a>
        </div>
        <p className="text-gray-700 mb-4 md:mb-0 dark:text-gray-400">{desc}</p>
        <div className="hidden md:flex flex-row-reverse w-full pb-2">
        {
          skills.map(skill => <span className="ml-2 text-sm text-indigo-600 dark:text-indigo-400">{skill}</span>)
        }
        </div>
      </div>
    </div>
  )
}

export default Projects
