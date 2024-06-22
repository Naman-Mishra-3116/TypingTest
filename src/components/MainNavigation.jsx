import React from "react";
import logo from "../../public/logo.png";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="mt-[3rem] flex flex-col items-center justify-center">
      <h2 className="flex gap-2 font-custom text-[33px] font-bold">
        <p>
          TypingTest<span className="text-[#1585e0]">.io</span>
          <span className="font-custom font-normal text-[20px] ml-3">by</span>
        </p>
        <NavLink to={"https://github.com/Naman-Mishra-3116/ReactTyping"}>
          <img src={logo} alt="logo with the name" width={60} height={60} />
        </NavLink>
      </h2>

      <nav className="mt-[3rem] flex gap-4">
        <NavLink
          to={"/"}
          end
          className={({ isActive }) => {
            return isActive
              ? "bg-[#1a1a1a] px-4 py-[10px] self-center rounded-md"
              : "px-4 py-[10px] self-center rounded-md bg-[#1585e0]";
          }}
        >
          Test
        </NavLink>

        <NavLink
          to={"/leaderboard"}
          end
          className={({ isActive }) => {
            return isActive
              ? "bg-[#1a1a1a] px-4 py-[10px] self-center rounded-md"
              : "px-4 py-[10px] rounded-md hover:bg-[#1a1a1a] self-center";
          }}
        >
          LeaderBoard
        </NavLink>
        <NavLink
          to={"/discord"}
          end
          className={({ isActive }) => {
            return isActive
              ? "bg-[#1a1a1a] px-4 py-[10px] self-center rounded-md"
              : "px-4 py-[10px] rounded-md hover:bg-[#1a1a1a] self-center";
          }}
        >
          Discord
        </NavLink>
        <NavLink
          to={"/about"}
          end
          className={({ isActive }) => {
            return isActive
              ? "bg-[#1a1a1a] px-4 py-[10px] rounded-md self-center"
              : "px-4 py-[10px] rounded-md hover:bg-[#1a1a1a] self-center";
          }}
        >
          About
        </NavLink>
        <NavLink
          to={"/login"}
          end
          className={({ isActive }) => {
            return isActive
              ? "bg-[#1a1a1a] px-4 py-[10px] rounded-md self-center"
              : "px-4 py-[10px] rounded-md hover:bg-[#1a1a1a] self-center";
          }}
        >
          Log In
        </NavLink>
        <NavLink
          to={"/signup"}
          end
          className={({ isActive }) => {
            return isActive
              ? "bg-secondary-blue px-4 text-center self-center py-[10px] rounded-md"
              : "px-4 py-[10px] rounded-md hover:bg-secondary-blue bg-primary-blue self-center";
          }}
        >
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
};

export default MainNavigation;
