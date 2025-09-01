import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Explore from './components/explore'
import Home from './components/Home'

const App = () => {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Explore/>
    },
    {
      path:"/Explore",
      element:<Explore/>
    },
    {
      path:"/Home",
      element:<Home/>
    }
  ])

  return (
    <>
    
    <RouterProvider router={routes} />
    
    </>
  
  )
}

export default App
