import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../src/Pages/ErrorPage";
import About from "./Pages/About";
import Login from "./formPages/Login";
import Signup from "./formPages/Signup";
import Reset from "./formPages/Reset";
import RootElement from "../src/Pages/RootElement";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LeaderBoard from "./Pages/LeaderBoard";
import HomePage from "./Pages/HomePage";
import StatsPage from "./Stats/StatsPage";
import DetailsPage from "./Stats/Details";
import UpdateEmail from "./formPages/UpdateEmail";
import ChangePassword from "./formPages/ChangePassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/leaderboard", element: <LeaderBoard /> },
        { path: "/about", element: <About /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/reset", element: <Reset /> },
        { path: "/privacy", element: <PrivacyPolicy /> },
        {
          path: "/stats",
          element: <StatsPage />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <DetailsPage /> },
            { path: "/stats/changeEmail", element: <UpdateEmail /> },
            { path: "/stats/changePassword", element: <ChangePassword /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
