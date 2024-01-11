/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isHover, setIsHover] = useState(false);
    const handleSignOut = () => {
      logOut()
        .then((res) => toast.success("Users logged out successfully"))
        .catch((error) => toast.error(error.message));
    };
    const navlinks = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 font-bold" : ""
            }
          >
            Blog
          </NavLink>
        </li>
       
      
      </>
    );
  
    
    const handleMouseHover = () => {
      setIsHover(true);
    };
    const handleMouseHoverOut = () => {
      setIsHover(false);
    };

    return (
        <div className="navbar bg-blue-400">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn bg-base-100 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black font-bold lg:text-xl rounded-box w-52"
        >
          {navlinks}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">
        <img
          className="h-16 w-20 md:w-24"
          src="https://i.ibb.co/zNwgG5b/image-removebg-preview.png"
          alt=""
        />
       <h3 className="text-xl md:text-3xl lg:text-4xl text-black font-bold">
            Gather<span className="text-red-900 font-bold">Joy</span>
          </h3>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-black font-bold lg:text-xl">
        {navlinks}
      </ul>
    </div>
    <div className="navbar-end">
      {user?.email ? (
        <div
          onMouseOver={handleMouseHover}
          onMouseOut={handleMouseHoverOut}
          className="relative"
        >
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={user.photoURL || ""}
            alt=""
          />
          {isHover && (
            <div className="absolute top-10 right-0 bg-white p-2 rounded shadow">
              <p>{user?.displayName}</p>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <button className="btn bg-red-800 text-white">Login</button>
        </Link>
      )}
      {user?.email && (
        <button onClick={handleSignOut} className="btn bg-red-800 text-white">
          Logout
        </button>
      )}
    </div>
  </div>
    );
};

export default Navbar;