import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default function Home() {
  
  return (
    <>
    <Head>
      <title>Joshua Tauro | Portfolio</title>
    </Head>
    <div className="font-inter pt-10 bg-white dark:bg-black duration-700 transition-all">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <section className=" w-10/12 md:w-6/12 m-auto text-xs text-center text-black dark:text-white pb-5">
        Built with 💖 by <a href="https://github.com/joshuatauro" target="_blank" className="text-blue-600 dark:text-blue-400 underline">Joshua</a> using <a href="https://nextjs.org" target="_blank" className="text-blue-600 dark:text-blue-400 underline">NextJs</a>, <a href="https://tailwindcss.com" target="_blank" className="text-blue-600 dark:text-blue-400 underline">TailwindCSS</a> and inspired from <a href="https://leerob.io" target="_blank" className="text-blue-600 dark:text-blue-400 underline" >leerob.io</a>
      </section>
    </div>
    </>
  )
}
