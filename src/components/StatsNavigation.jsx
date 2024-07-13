import React from "react";
import { NavLink } from "react-router-dom";
import { styleFunctionForMiddleLink } from "../utils/navigationStyleFunction.function";
import { useDispatch } from "react-redux";
import { authFunction } from "../../Store/authentication.store";

const StatsNavigation = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-8">
      <p className="bg-secondary-back p-4 rounded-md self-center mt-8 mb-5">
        Account & Security
      </p>
      <nav className="flex gap-4 self-center mb-5">
        <NavLink to={"/stats"} end className={styleFunctionForMiddleLink}>
          Statistics
        </NavLink>
        <NavLink
          to={"/stats/changeEmail"}
          end
          className={styleFunctionForMiddleLink}
        >
          Change Email
        </NavLink>
        <NavLink
          to={"/stats/changePassword"}
          end
          className={styleFunctionForMiddleLink}
          onClick={() => {
            window.scrollTo({ behavior: "smooth", top: 300});
          }}
        >
          Change Password
        </NavLink>
        <NavLink
          className={styleFunctionForMiddleLink}
          to={"/"}
          onClick={() => {
            localStorage.removeItem("token");
            dispatch(
              authFunction.setAllData({
                email: "",
                auth: false,
                token: "",
                name: "",
              })
            );
          }}
        >
          Logout
        </NavLink>
        <button className={"hover:bg-red-600 p-2 rounded-md"}>
          Delete Account
        </button>
      </nav>
    </div>
  );
};

export default StatsNavigation;
