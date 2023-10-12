import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hamburger, setHamburger] = useState(true);

  const [username, setUsername] = useState([]);
  const [photourl, setPhotourl] = useState([]);

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem("Username")));
    setPhotourl(JSON.parse(localStorage.getItem("PhotoURL")));
  }, []);

  const handlelogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <header className="mx-5">
      {/*  --------------- mobile ------------------ */}
      <div className="mobile flex justify-between items-center py-2 xl:max-w-screen-xl xl:mx-auto">
        {/* Logo */}
        <div>
          <img
            className="w-[50px] min-[570px]:w-[70px]"
            src="https://i.ibb.co/XxxQWZz/2817134-ball-confetti-newyears-party-icon.png"
            alt="logo"
          />
        </div>

        {/* hamburger */}
        <div className="text-xl z-50" onClick={() => setHamburger(!hamburger)}>
          {hamburger ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon className="text-white" icon={faXmark} />
          )}
        </div>

        {/* Navbar */}
        <nav
          onClick={() => setHamburger(true)}
          className={`flex gap-5 text-4xl justify-center items-center transition-all duration-500 bg-gray-800 z-40 text-white flex-col h-screen min-h-[600px] ${
            hamburger ? "-top-[1000px]" : "top-0"
          } right-0 w-full absolute`}
        >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/getInvolved"}>Get involved</NavLink>

          {user ? (
            <div className="text-xl flex items-center flex-col gap-5">
              <div className="w-[50px] h-[50px] border-2 border-white overflow-hidden rounded-full flex justify-center items-end">
                <img
                  className={`${
                    user?.photoURL ? " " : "w-[40px] h-[40px]"
                  } object-cover object-center`}
                  src={`${
                    user?.photoURL
                      ? user.photoURL
                      : photourl
                      ? photourl[0]
                      : "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/27-man-256.png"
                  }`}
                  alt=""
                />
              </div>
              <p>
                {user?.displayName
                  ? user.displayName
                  : username
                  ? username[0]
                  : "(Please Refresh)"}
              </p>
              <Link
                onClick={handlelogOut}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Log out
              </Link>
            </div>
          ) : (
            <div className="flex gap-5 text-xl">
              <Link
                className="text-blue-500 bg-slate-300 py-2 px-4 rounded-md"
                to={"/login"}
              >
                Log in
              </Link>
              <Link
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                to={"/signup"}
              >
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/*  --------------- desktop ------------------ */}
      <div className="desktop justify-between items-center py-5 xl:max-w-screen-xl xl:mx-auto">
        {/* Logo */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            className="w-[75px]"
            src="https://i.ibb.co/XxxQWZz/2817134-ball-confetti-newyears-party-icon.png"
            alt="logo"
          />
        </div>

        {/* Navbar */}
        <nav className="flex gap-5 text-2xl">
          <div data-aos="fade-up" data-aos-duration="1200">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeRouter" : ""
              }
            >
              Home
            </NavLink>
          </div>
          <div data-aos="fade-up" data-aos-duration="1400">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeRouter" : ""
              }
              to={"/about"}
            >
              About
            </NavLink>
          </div>
          <div data-aos="fade-up" data-aos-duration="1600">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeRouter" : ""
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </div>
          <div data-aos="fade-up" data-aos-duration="1800">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeRouter" : ""
              }
              to={"/blog"}
            >
              Blog
            </NavLink>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeRouter" : ""
              }
              to={"/getInvolved"}
            >
              Get involved
            </NavLink>
          </div>
        </nav>

        {user ? (
          <div
            className="flex text-xl items-center gap-3 lg:gap-5"
          >
            <div className="w-[50px] h-[50px] border-2 border-slate-500 overflow-hidden rounded-full flex justify-center items-end">
              <img
                className={`${
                  user?.photoURL ? " " : "w-[40px] h-[40px]"
                } object-cover object-center`}
                src={`${
                  user?.photoURL
                    ? user.photoURL
                    : photourl
                    ? photourl[0]
                    : "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/27-man-256.png"
                }`}
                alt=""
              />
            </div>
            <p>
              {user?.displayName
                ? user.displayName
                : username
                ? username[0]
                : "(Please Refresh)"}
            </p>
            <Link
              onClick={handlelogOut}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Log out
            </Link>
          </div>
        ) : (
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            className="flex gap-5 text-xl"
          >
            <Link
              className="text-blue-500 bg-slate-300 py-2 px-4 rounded-md"
              to={"/login"}
            >
              Log in
            </Link>
            <Link
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              to={"/signup"}
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
