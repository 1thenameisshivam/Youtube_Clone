import { Outlet } from "react-router-dom"
import Browse from "./Browse"
import { useSelector } from "react-redux"
import Header from "./Header"
import Profile from "./profile"
import Sidebar from "./Sidebar"
function App() {
 
  const toggle=useSelector(store=>store.config.profileButton)
  return (
    <div className="w-screen">
    <Header/>
    {
      toggle && <Profile/>
    }
    <div className="flex" >
    <Sidebar/>
    <Outlet/>
    </div>
   
    </div>
  )
}

export default App
