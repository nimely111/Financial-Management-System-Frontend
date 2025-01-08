import { NavLink } from "react-router-dom";
import logo from "../assets/images/try_&_see.webp";

const Navbar = () => {
  // conditions for active state
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  // apply hamburger menu
  return (
    <nav className="bg-green-700 border-b border-green-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-16 w-auto rounded-full"
                src={logo}
                alt="React Users"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Try & See Saving Club
              </span>
            </NavLink>

            <div className="md:ml-auto flex items-center justify-center">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/users" className={linkClass}>
                  Admissions
                </NavLink>
                <NavLink to="/add-user" className={linkClass}>
                  New Admission
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
