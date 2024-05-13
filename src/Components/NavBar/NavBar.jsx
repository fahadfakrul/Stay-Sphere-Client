import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/crown.png"
import UseAuth from "../../Hooks/UseAuth";

const NavBar = () => {
  const { user, logOut} = UseAuth();
  
  return (
    <div className="navbar bg-base-100 my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg font-playfair  border-b-4 border-[#CC9933] px-5 py-3  "
                : " font-semibold  font-playfair text-lg"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg  font-playfair  border-b-4 border-[#CC9933] px-5 py-3 "
                : "font-semibold  font-playfair text-lg"
            }
            to="/rooms"
          >
            Rooms
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg  font-playfair  border-b-4 border-[#CC9933] px-5 py-3 "
                : " font-semibold  font-playfair text-lg"
            }
            to="/mybookings"
          >
            My Bookings
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg  font-playfair  border-b-4 border-[#CC9933] px-5 py-3  "
                : " font-semibold  font-playfair text-lg"
            }
            to="/aboutus"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg  font-playfair  border-b-4 border-[#CC9933] px-5 py-3  "
                : " font-semibold  font-playfair text-lg"
            }
            to="/contactus"
          >
            Contact Us
          </NavLink>
          </ul>
        </div>
        <img className="h-14 ml-5" src={logo} alt="" />
        <a className="btn btn-ghost text-base lg:text-3xl font-semibold lg:font-bold text-black">
         Stay Sphere
        </a>
      </div>
      
      <div className="navbar-end">
      <div className=" hidden lg:flex">
        <ul className="menu-horizontal px-1  items-center gap-5 mr-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg font-playfair  border-b-4 border-[#CC9933] px-5 py-3  "
                : " font-semibold  font-playfair text-lg"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg  font-playfair  border-b-4 border-[#CC9933] px-5 py-3  "
                : "font-semibold  font-playfair text-lg"
            }
            to="/rooms"
          >
            Rooms
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg  font-playfair  border-b-4 border-[#CC9933] px-5 py-3  "
                : " font-semibold  font-playfair text-lg"
            }
            to="/mybookings"
          >
            My Bookings
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg  font-playfair  border-b-4 border-[#CC9933] px-5 py-3  "
                : " font-semibold  font-playfair text-lg"
            }
            to="/aboutus"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg  font-playfair  border-b-4 border-[#CC9933] px-5 py-3  "
                : " font-semibold  font-playfair text-lg"
            }
            to="/contactus"
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
        {user? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip hover:tooltip-open tooltip-left " data-tip={user?.displayName ||"no name available" }
            >
              <div className="w-10 rounded-full ">
                <img
                  
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60  text-lg"
            >
              <li>
                <a >{user?.email || "email not found"}</a>
              </li>
              
              <li className="text-[#3A516E]">
                <button onClick={logOut}>Logout</button> 
                
              </li>
            </ul>
          </div>
         ) : ( 
          <Link to={"/login"}>
            <a className="btn text-[#3A516E] text-lg">Login</a>
          </Link>
          
         )} 
      </div>
    </div>
  );
};

export default NavBar;
