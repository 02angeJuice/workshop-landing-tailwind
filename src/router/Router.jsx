import React from "react"
import { Outlet, useRoutes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
// import AppLayout from "../layouts/AppLayout"

// import LandingPage from "../pages/LandingPage"

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        // <AppLayout>
        <Outlet />
        // </AppLayout>
      ),
      children: [{ element: <LandingPage />, index: true }],
    },
  ])

  return routes
}

export default Router
