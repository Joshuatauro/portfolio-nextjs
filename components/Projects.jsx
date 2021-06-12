import React from 'react'
import { SiGithub } from 'react-icons/si'

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
      title: "Devstagram",
      desc: "A full stack social media app where users can share posts as well as leave comments and like other poeple's post, users can also see other users profile and follow various different subreddits      ",
      skills: ['SCSS', 'Express', 'PostgreSQL', 'React'],
      liveLink: "https://andha-app.herokuapp.com",
      githubLink: "https://github.com/joshuatauro/devstagram-client",
      isUnderDevelopment: true
    },    
    {
      title: "TH",
      desc: "A fullstack ecommerce app with all major ecommerce features such as viewing different items and details related to them, adding items to cart as well as to wishlist, users can also place orders and check the status of the delivery in the settings tab",
      skills: ['SCSS', 'Express', 'MongoDB', 'React'],
      liveLink: "https://andha-app.herokuapp.com",
      githubLink: "https://github.com/Joshuatauro/MERN-ecommerce",
      isUnderDevelopment: true
    },
    {
      title: "JobTrackr",
      desc: "A fullstack job tracking app to help users track their numbers related to the job hunt such as OA's done, Interviews attended and job offer's received, can also keep track of job status and where they are in the process with a company",
      skills: ['TailwindCSS', 'Firebase', 'React'],
      liveLink: "https://andha-app.herokuapp.com",
      githubLink: "https://github.com/joshuatauro/jobtrackr",
      isUnderDevelopment: true
    },
  ]

  return (
    <section id="projects" className="w-full pt-20 ">
      <div className="w-10/12 md:w-6/12 m-auto">
        <h1 className="text-4xl text-black font-bold dark:text-white">Projects</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-400">These are few of my recent projects that i've worked on, some might be under development right now 😅. You can check all my projects at my <a href="https://github.com/joshuatauro" target="_blank" rel="noreferrer nofollow" className="text-blue-600 dark:text-blue-400">Github</a></p>
        {
          projects.map(({isUnderDevelopment, title, desc, skills, githubLink, liveLink}) => <Project title={title} desc={desc} githubLink={githubLink} skills={skills} liveLink={liveLink} isUnderDevelopment={isUnderDevelopment} />)
        }
      </div>
    </section>
  )
}

const Project = ({title, desc, skills, githubLink, liveLink, isUnderDevelopment}) => {
  return(
    <article className="w-full border border-gray-300 rounded-md shadow-sm  duration-300 transition-all my-4">
      <div className="w-11/12 py-2 m-auto">
        <div className="flex justify-between items-center">
          <a href={isUnderDevelopment ? githubLink : liveLink} target="_blank" rel="noreferrer nofollow">
            <h1 className="text-lg font-bold text-black dark:text-white">{title}</h1>
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer nofollow">
            <SiGithub size={20} className="text-black dark:text-white" />
          </a>
        </div>
        <p className="text-gray-700 dark:text-gray-400">{desc}</p>
        <div className="hidden md:flex flex-row-reverse w-full mt-1">
        {
          skills.map(skill => <h2 className="ml-2 text-sm text-blue-600 dark:text-blue-400">{skill}</h2>)
        }
        </div>
      </div>
    </article>
  )
}

export default Projects
