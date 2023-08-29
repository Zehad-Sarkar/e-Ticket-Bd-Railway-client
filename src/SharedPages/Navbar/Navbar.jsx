import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const user = false;
  const userName = "Zehad Sarkar";
  const userEmail = "zehad@sarkar.com";
  const userPhone = "0123456789";
  const menuITem = user ? (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Train Information</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        <details className="w-[200px]">
          <summary>{userName}</summary>
          <ul className="p-2 bg-base-100">
            <li>{userName}</li>
            <li>{userEmail}</li>
            <li>{userPhone}</li>
            <hr />
            <li>
              <Link>Profile</Link>
            </li>
            <li>
              <Link>Purchase History</Link>
            </li>
            <li>
              <Link>Update Profile</Link>
            </li>
            <li>
              <Link>Logout </Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Login</Link>
      </li>
      <li>
        <Link>Register</Link>
      </li>
      <li>
        <Link>Train Information</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-xl"
          >
            {/* {user ? menuItemAfterLogin : menuItemBeforeLogin} */}
            {menuITem}
          </ul>
        </div>
        <div className="flex items-center text-xl normal-case">
          <img src={logo} alt="logo" className="w-20 h-20" />

          <p className="ml-3 text-xl normal-case">
            Bangladesh <br /> Railway
          </p>
        </div>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="px-1 font-medium menu menu-horizontal">
          {/* {user ? menuItemAfterLogin : menuItemBeforeLogin} */}
          {menuITem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
