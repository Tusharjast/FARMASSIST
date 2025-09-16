import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Explore from "./components/Explore";
import Home from "./components/Home";
import Cropperelement from "./components/Cropperelement";



const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>, 
    },
    {
      path: "/Explore",
      element: <Explore />,
    },
    {
      path: "/Home",
      element: <Home />, 
    },
    {
      path: "/Crop",
      element: <Cropperelement />, 
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
