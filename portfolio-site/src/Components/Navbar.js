import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/index.js";
import logo from "./../Assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className={"w-full flex justify-between items-center max-w-7x1 mx-auto"}
      >
        <Link
          to="/"
          className={"flex items-center gap-2"}
          onClick={() => {
            SecurityPolicyViolationEvent("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className={"w-9 h-9 object-contain"} />
          <p className="text-tertiary text-[18px] font-bold cursor-pointer flex">
            Dylan Michalak
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
