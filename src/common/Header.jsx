import { useState, useEffect, useContext } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { ModeContextState } from "../ModeContext";
// import { ModeState } from "../ModeContext";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const {darkMode, setDarkMode} = useContext(ModeContextState);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    zIndex: "99",
    backgroundColor: scrolling ? "rgb(47, 50, 65)" : "transparent",
    transition: "all 0.5s",
    boxShadow: scrolling ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none",
  };

  const MenuList = () => {
    const linkClass =
      "w-full flex justify-center items-center p-2.5 text-2xl lg:text-base mb-5 lg:mb-0 uppercase lg:hover:bg-transparent lg:hover:underline hover:bg-zinc-400 transition-all";
    return (
      <>
        <Link className={linkClass} to="/">
          Home
        </Link>
        <Link className={linkClass} to="/blogs">
          Blogs
        </Link>
        <Link className={linkClass} to="/post">
          Post
        </Link>
        <Link className={linkClass} to="/profile">
          <FaUserCircle className="mr-5"/>
          Profile
        </Link>
        <Link className={linkClass} to="/profile">
          Sign in
        </Link>
      </>
    );
  };

  return (
    <header style={navbarStyle} className="fixed w-full">
      <nav className="w-full h-16 flex justify-between items-center mx-auto max-w-7xl px-4">
        <div onClick={() => setNavbarOpen(!navbarOpen)} className="h-12 flex ">
          <Link to="/">
            <h1
              // style={{color : darkMode ? "yellow" : "red"}}
              className={`text-3xl cursor-pointer`}
            >
              <span className="">Meta</span>
              <span className="font-bold">Blog</span>
            </h1>
          </Link>
        </div>
        <div className="cta-button hidden lg:flex justify-center items-center gap-4">
          <MenuList />
          <div className="flex justify-center items-center gap-4 w-full">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative dark-mode-btn dark-btn w-10 h-10 flex justify-center items-center rounded-xl"
            >
              {darkMode ? (
                <FaSun
                  className="text-xl"
                  // style={{ color: "yellow" }}
                />
              ) : (
                <BsMoonStarsFill style={{ color: "white" }} />
              )}
            </button>
          </div>
        </div>
        <div className="lg:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
          {!navbarOpen ? (
            <FaBarsStaggered className="text-3xl cursor-pointer" />
          ) : (
            <FaXmark className="text-4xl cursor-pointer" />
          )}
        </div>
      </nav>
      <div
        style={{
          transform: navbarOpen ? "translateX(0)" : "translateX(-100%)",
          right: 0,
        }}
        className={`lg:hidden mt-16 absolute top-0 right-0 min-h-screen w-full bg-zinc-300 text-black transition ease-in-out delay-150`}
      >
        <nav className="flex flex-col justify-center items-center pt-7 px-10">
          <MenuList />
        </nav>
      </div>
    </header>
  );
};

export default Header;
