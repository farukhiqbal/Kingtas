import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FiAlignJustify } from "react-icons/fi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import mainlogo from "../assets/images/mainlogo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [heading, setHeading] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [submenuStates, setSubmenuStates] = useState({});

  const handleSubmenuToggle = (submenuKey) => {
    // Toggle the state of the specified submenu
    setSubmenuStates((prevState) => ({
      ...prevState,
      [submenuKey]: !prevState[submenuKey],
    }));
  };

  const handleNav = () => {
    setNav(!nav);
  };
  const handleLinkClick = () => {
    scroll.scrollToTop();
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     setShowShadow(scrollPosition > 0); // Adjust the value as needed
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Define your navigation links as an array of objects
  const navLinks = [
    {
      text: "Home",
      url: "/home",
    },
    // { text: "ToolKits", url: "/toolkits" },
    // { text: "Jobs", url: "/jobs" },
    // { text: "Blogs", url: "/blog" },
    // { text: "Tracking", url: "/tracking" },

    {
      text: "About Us",
      url: "#",
      submenu: true,
      dropdown: [
        { name: "  Principal's Message", link: "#" },
        { name: " Board Of Trustees", link: "#" },
        { name: "  Mission & Vision", link: "/mission&vision" },
        { name: "   History", link: "#" },
        { name: "    Accreditation", link: "#" },
        { name: " College infrastructure   ", link: "#" },
      ],
    },

    {
      text: "   Admission   ",
      submenu: true,
      dropdown: [
        { name: "  Admission  ", link: "/admissionhome" },
        { name: "   Merit List", link: "/meritlist" },
        { name: "      Fee Structure    ", link: "/feestructure" },
        { name: "    Contact Admission Office   ", link: "/admissionoffice" },
        { name: "      Test schedule   ", link: "/testdate" },
        { name: "       Rules and Policy  ", link: "/ruleandpolicy" },
        { name: "   Admission Guide  ", link: "/guide" },
      ],
    },

    {
      text: "Faculty/Staff ",
      submenu: true,
      dropdown: [
        { name: "  Teaching Faculty ", link: "/teaching-staff" },
        { name: "     Visiting Faculty    ", link: "/visiting" },
        { name: "   Admin Staff    ", link: "/admin" },
      ],
    },

    {
      text: "  List of Program",
      url: "#",
      submenu: true,
      dropdown: [
        { name: "LHV 2 Year Program ", link: "/lhvprogram" },
        { name: "   CNA 2 Year Program", link: "/cnaprogram" },
        { name: "    CMW 2 Year Program    ", link: "/cmwprogram" },
      ],
    },

    {
      text: "Media Centre",
      url: "#",
      submenu: true,
      dropdown: [
        { name: " News & Events Update", link: "/news" },
        { name: "  Annual Reports", link: "/annualreport" },
        { name: "        Notice Board", link: "/noticeboard" },
      ],
    },

    { text: "Contact Us", url: "/contact" },
  ];

  return (
    <>
      <div className="flex   bg-[#3a5683] h-[30px] text-white pt-1  justify-center   sm:justify-center md:justify-end sm:gap-x-[10px] gap-x-[10px]  md:gap-x-[30px]">
        <Link
          to="/login"
          className="        text-[8]   md:text-[10px]   lg:text-[15px] no-underline text-white cursor-pointer hover:text-green-500 hover:text-underline"
        >
          {" "}
          Sign In
        </Link>
        <Link
          to="#"
          className="   text-[8]   md:text-[10px]   lg:text-[15px]   no-underline text-white cursor-pointer hover:text-green-500  "
        >
          | Apply Now
        </Link>
        <Link
          to="/"
          className="text-[15px] mr-[4rem]     sm:display-none   md:display-none   lg:display xl:display  no-underline text-white cursor-pointer hover:text-green-500 "
        >
          | Career Opportunities
        </Link>
      </div>

      <div
        className={`sticky top-0 z-[1000] text-black Georgian bg-white px-4 md:px-6 w-full border-b-2 border-red-700 `}
      >
        <div className="flex flex-col lg:flex-row justify-between py-2">
          <div className="flex flex-col lg:flex-row gap-x-4">
            <div className="lg:hidden hover:text-orange-500 ml-8 lg:ml-0  ">
              {/* bars  */}
              <button
                onClick={handleNav}
                className="fixed top-8 right-4 inline-flex justify-right items-center rounded-lg  px-2 p-2 text-lg font-medium bg-black/5 shadow-sm hover:bg-black/10"
              >
                <FiAlignJustify />
              </button>
            </div>
            <div className="flex  items-center">
              <Link to="/" onClick={handleLinkClick}>
                <img className="h-[70px] " src={mainlogo} alt="" />
              </Link>
            </div>
          </div>
          {/* <div className="flex gap-x-6 md:gap-x-12   justify-center items-center ml-3">
  <button className="cursor-pointer h-12 text-[16px] lg:h-10 text-white px-4 rounded-2xl bg-red-500 hover:bg-red-600">
    Apply Now
  </button>
  <button className="cursor-pointer  h-12 text-[16px] lg:h-10 text-white px-4 rounded-2xl bg-red-500 hover:bg-red-600">
    Sign In
  </button>
</div> */}

          <div
            className={`h-1 flex flex-col ml-10 md:flex-row justify-between  md:text-[17px]   md:pt-[30px] md:mt-2 items-center font-bold md:px-7 text-sm ${
              showShadow ? "shadow-2xl" : ""
            }`}
          >
            <div className="">
              <div className="hidden lg:inline Georgian">
                <ul className="flex justify-center hover:cursor-pointer ">
                  {navLinks.map((li, index) => (
                    <li
                      key={index}
                      className="py-1 px-3 hover:rounded duration-400 hover:bg-black/5 hover:text-red-700 drop-shadow-xl relative group"
                    >
                      <Link
                        to={li.url}
                        className="flex text-black no-underline "
                      >
                        {li.text}
                        {li.submenu ? (
                          <span className="text-md md:ml-2  inline ">
                            <BsChevronDown />
                          </span>
                        ) : null}
                      </Link>

                      {li.submenu && (
                        <div className="absolute top-7 left-1 w-[250px]   hidden group-hover:block shadow-lg z-[999] bg-white/90">
                          <div className="pt-2 py-1">
                            <div className="w-3 h-4 absolute mt-5 rotate-45"></div>

                            <div className="py-2 px-3 flex flex-col">
                              {li.dropdown.map((mysublinks, subIndex) => (
                                <div
                                  className="text-black/80    hover:text-red-500"
                                  key={subIndex}
                                >
                                  <Link
                                    to={mysublinks.link}
                                    className="text-black no-underline text-[17px]"
                                  >
                                    <p className="text-md font-light hover:ml-2 hover:text-red-600 ease-out  duration-100 border-b border-black">
                                      {mysublinks.name}
                                    </p>
                                    <p className=""></p>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "Georgian bg-white absolute right-0  top-0 w-80  z-1000 rounded-sm shadow-md overflow-y-hidden text-black "
              : "fixed right-[-100%] "
          }
        >
          <div className="sticky min-h-full max-h-[100vh] bg-white overflow-y-auto">
            <ul className="pt-4 px-6 bg-white f-h pb-3">
              <div className="flex justify-end md:pr-8 pt-4 ">
                <TfiClose
                  onClick={handleNav}
                  className="rounded p-1 font-bold hover:bg-black/5"
                  size={24}
                />
              </div>
              <div className="mt-6 text-[18px] ">
                {navLinks.map((li, index) => (
                  <>
                    <Link to={li.url} className="text-black no-underline">
                      <li
                        key={index}
                        className="cursor-pointer Georgian py-2 pl-3 font-medium   hover:rounded hover:bg-black/5 hover:text-red-700 "
                      >
                        <span className="" onClick={handleNav}>
                          {" "}
                          {li.text}
                        </span>
                      </li>
                    </Link>
                    {li.submenu && (
                      <BsChevronDown
                        className={`${
                          submenuStates[index] && "rotate-180"
                        } absolute  mt-[-39px] right-8 `}
                        onClick={() => handleSubmenuToggle(index)}
                      />
                    )}

                    <div className=" ml- mt-2  flex flex-col justify-center border-b-2 border-black items-center max-h-[40vh] overflow-y-auto">
                      {li.submenu && submenuStates[index] && nav && (
                        <ul className="pt-0">
                          {li.dropdown.map((submenuItem, subIndex) => (
                            <Link
                              to={submenuItem.link}
                              className="text-black no-underline"
                            >
                              <li
                                key={subIndex}
                                className=" text-black/70 text-md ease-out   transition-all duration-200  gap-x-4 cursor-pointer    rounded-md py-2   hover:rounded hover:bg-black/5 hover:text-red-700"
                                onClick={() => {
                                  setNav(!nav);
                                }}
                              >
                                {submenuItem.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
