import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DynamicParams from './components/dynamicParams/dynamicParams.jsx'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/Contact/contact.jsx'
import NotFound from './components/NotFound/NotFound.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='DynamicParams' element={< DynamicParams/>} />
      <Route path='DynamicParams/:parameter' element={<DynamicParams />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
      
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
