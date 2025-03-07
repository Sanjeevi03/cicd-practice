import { BrowserRouter, useLocation, useNavigate } from "react-router-dom"
import { AppRoutes } from "./routes"
import { useEffect } from "react"

function App() {
  return (
    <BrowserRouter>
      <AuthChecker/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App

const AuthChecker = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem("login")
    if(!loggedIn) {
      navigate("/login")
    }
    if(pathname && pathname.split("/")[1] === "register") {
      navigate("/register")
    }
  }, [navigate])
  return <></>
}