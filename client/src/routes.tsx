import { useRoutes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { About } from "./components/About";

const routes = [
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/",
    element: <Layout/>,
    children:[
      { index: true,  element: <Home/>},
      { path:"about",  element: <About/>}
    ]
  },
]

export const AppRoutes = () => {
  const route = useRoutes(routes)
  return (
    <>
      {route}
    </>
  )
}