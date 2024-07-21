import React from "react";
import logo from "../../public/croped.png";
import { NavLink } from "react-router-dom";
import {
  styleFunctionForFirstLink,
  styleFunctionForLastLink,
  styleFunctionForMiddleLink,
} from "../utils/navigationStyleFunction.function.js";
import { useSelector } from "react-redux";


const MainNavigation = () => {
  const isAuthticated = useSelector((state) => state.valid.isAuthticated);
  const username = useSelector((state) => state.valid.Username);

  return (
    <div>
      <header className="mt-[3rem] flex flex-col items-center justify-center">
        <h2 className="flex font-custom text-[33px] font-bold items-center">
          <p>
            TypingTest<span className="text-[#1585e0]">.io</span>
            <span className="font-custom font-normal text-[20px] ml-3">by</span>
          </p>
          <NavLink to={"https://github.com/Naman-Mishra-3116/ReactTyping"}>
            <img src={logo} alt="logo with the name" width={80} height={60} />
          </NavLink>
        </h2>

        <nav className="mt-[3rem] flex gap-4">
          <NavLink to={"/"} end className={styleFunctionForFirstLink}>
            Test
          </NavLink>

          <NavLink
            to={"/leaderboard"}
            end
            className={styleFunctionForMiddleLink}
          >
            LeaderBoard
          </NavLink>
          <NavLink
            to={"/discord"}
            target="_blank"
            className={styleFunctionForMiddleLink}
            end
          >
            Discord
          </NavLink>
          <NavLink to={"/about"} end className={styleFunctionForMiddleLink}>
            About
          </NavLink>
          {isAuthticated ? (
            <NavLink to={"/stats"} end className={styleFunctionForLastLink}>
              {username}
            </NavLink>
          ) : (
            <>
              <NavLink to={"/login"} end className={styleFunctionForMiddleLink}>
                Log In
              </NavLink>
              <NavLink to={"/signup"} end className={styleFunctionForLastLink}>
                Sign Up
              </NavLink>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;
