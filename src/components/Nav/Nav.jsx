import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineNotification,
} from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { useState } from "react";
import { MdOutlineClass } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <nav className="wrapper">
      <Link
        to="/board"
        onClick={() => setActiveNav(1)}
        className={activeNav === 1 ? "active" : ""}
      >
        <AiOutlineNotification />
      </Link>

      <Link
        to="/course"
        onClick={() => setActiveNav(2)}
        className={activeNav === 2 ? "active" : ""}
      >
        <MdOutlineClass />
      </Link>

      <Link
        to="/home"
        onClick={() => setActiveNav(3)}
        className={activeNav === 3 ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>

      <Link
        to="/data"
        onClick={() => setActiveNav(4)}
        className={activeNav === 4 ? "active" : ""}
      >
        <BsClipboardData />
      </Link>

      <Link
        to="/mypage"
        onClick={() => setActiveNav(5)}
        className={activeNav === 5 ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
    </nav>
  );
};

export default Nav;
