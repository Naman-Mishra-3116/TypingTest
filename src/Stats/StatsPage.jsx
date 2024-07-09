import React from "react";
import StatsNavigation from "../components/StatsNavigation";
import { Outlet } from "react-router-dom";

const StatsPage = () => {
  return (
    <div>
      <StatsNavigation />
      <Outlet />
    </div>
  );
};

export default StatsPage;
