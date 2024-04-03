import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="flex w-full justify-between py-6 items-center">
      <img
        draggable="false"
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px]"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text[16px] text-white mr-10 transition  delay-150	  hover:text-green-400 `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          onClick={() => settoggle((prev) => !prev)}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
        />
        <div
          className={`${toggle ? "flex" : "hidden"}
        p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex  justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text[16px] text-white mb-3`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
