import React from 'react'
import Menu from "../components/menu/Menu"
import Banner from "../components/banner/Banner"
import About from '../components/about/About'
import Project from '../components/project/Project'
import Blog from '../components/blog/Blog'
import Question from '../components/question/Question'
import Features from '../components/features/Features'
import Clients from '../components/clients/Clients'
import Inquiry from '../components/inquiry/Inquiry'

const Home = () => {
  return (
   <> 
     
      <Banner/>
      <About/>
      <Project/>
      <Features/>
      <Clients/>
      <Question/>
      <Inquiry/>
      <Blog/>
       
   </>
  )
}

export default Home