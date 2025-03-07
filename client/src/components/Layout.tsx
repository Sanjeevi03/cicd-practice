import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {1
    localStorage.removeItem("login")
    navigate("/login");
  };

  const sideBar = [
    {
      name: "Home", path:"/",
    },
    {
      name: "About", path: "/about"
    }
  ];

  return (
    <div>
      <div className="header flex border-2 border-gray-300 py-5">
        <h1>Header</h1>
        <button onClick={handleLogout} className="border-2 px-3">Logout</button>
      </div>
      <div className="flex h-[92.6vh]">
        <div className="sidebar border-2 border-gray-300 w-80">
          <h1>Sidebar</h1>
          {
            sideBar.map(i => (
              <Link to={i.path}><li key={i.path}>{i.name}</li></Link>
            ))
          }
        </div>
        <div className="main border-2 border-gray-300 w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
