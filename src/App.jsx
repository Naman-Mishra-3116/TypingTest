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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/leaderboard", element: <LeaderBoard /> },
        { path: "/about", element: <About /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/reset", element: <Reset /> },
        { path: "/privacy", element: <PrivacyPolicy /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
