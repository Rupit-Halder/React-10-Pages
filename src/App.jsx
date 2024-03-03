
import Layout from "./components/root/Layout"
import Aboutus from "./pages/Aboutus"
import Home from "./pages/Home"
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Router} from "react-router-dom"
import Pricingpage from "./pages/Pricingpage"
import Features from "./pages/Features"
import Work from "./pages/Work"
import Case from "./pages/Case"
import Blog from "./pages/Blog"
import ReadBlog from "./pages/ReadBlog"
import ContactUs from "./pages/ContactUs"
import Privacy from "./pages/Privacy"

const rounter =  createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<Aboutus/>}></Route>
    <Route path="/pricing" element={<Pricingpage/>}></Route>
    <Route path="/features" element={<Features/>}></Route>
    <Route path="/work" element={<Work/>}></Route>
    <Route path="/case" element={<Case/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/readblog" element={<ReadBlog/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/privacy" element={<Privacy/>}></Route>
  </Route>
))

function App() {
 

  return (
    <>
    <RouterProvider router={rounter}></RouterProvider>
    </>
  )
}

export default App
