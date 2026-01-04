import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `text-xl px-3 py-2 rounded-md transition-colors duration-200 ${
      isActive
        ? 'text-[#7F00FF] font-semibold border-b-2 border-[#7F00FF]'
        : 'text-gray-700 hover:text-[#7F00FF]'
    }`;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/apps" className={navLinkClass}>Apps</NavLink></li>
            <li><NavLink to="/installation" className={navLinkClass}>Installation</NavLink></li>
          </ul>
        </div>
 
        <Link to="/" className="btn btn-ghost text-xl text-[#7F00FF] flex items-center gap-2">
          <img
            className="h-[30px] w-[30px]"
            src="/src/assets/image/logo.png"
            alt="Hero.io logo"
          />
          HERO.IO
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/apps" className={navLinkClass}>Apps</NavLink></li>
          <li><NavLink to="/installation" className={navLinkClass}>Installation</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/LiaJahan"
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-xl text-white rounded-l bg-[#7F00FF] transition-all duration-300">
          <i className="fa-brands fa-github mr-2"></i>
          Contribute
        </a>
      </div>

    </div>
  );
};

export default Navbar;
