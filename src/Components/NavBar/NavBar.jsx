import { NavLink } from "react-router-dom";
import logo from "../../assets/crown.png";
const NavBar = () => {
  const navlinks = (
    <>
     
        <li>
        <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-lg text-[#cc9933] py-1 rounded-lg "
                  : " font-semibold  text-lg"
              }
              to="/"
            >
              Home
            </NavLink>
        </li>
        <li>
          <a>Rooms</a>
        </li>
        <li>
          <a>My Bookings</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
         <li>
          <a>Contact Us</a>
        </li>
    
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-5">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navlinks}
          </ul>
        </div>
        <div>
          <div className="flex items-center ml-5">
            <img className="h-12" src={logo} alt="" />
            <a className=" ml-3 text-xl lg:text-3xl font-semibold lg:font-bold text-black">
         Stay Sphere
        </a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="mr-5 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-bold">
           {navlinks}
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
           
            <li>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
