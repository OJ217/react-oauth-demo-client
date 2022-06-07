import { authContext } from "../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const user = useContext(authContext);

  function signOutHandle() {
    axios.get("https://react-oauth-demo.herokuapp.com/auth/log-out", {withCredentials: true})
      .then(res => {
        if(res.data) {
          window.location.href = "/";
        }
      })
  }

  return (
    <nav className="w-full py-4 bg-[#171515]">
        <ul className="flex items-center justify-evenly">
            <Link to={"/"}><li className="text-white text-xl font-semibold">Home</li></Link>
            {user 
              ? <button onClick={signOutHandle}><li className="text-white text-xl font-semibold">Sign Out</li></button>
              : <Link to={"/sign-in"}><li className="text-white text-xl font-semibold">Sign In</li></Link>
            }
            
        </ul>
    </nav>
  )
}
