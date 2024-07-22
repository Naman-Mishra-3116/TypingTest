import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../src/Pages/ErrorPage";
import About from "./Pages/About";
import Login from "./formPages/Login";
import Reset from "./formPages/Reset";
import RootElement from "../src/Pages/RootElement";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LeaderBoard from "./Pages/LeaderBoard";
import HomePage from "./Pages/HomePage";
import StatsPage from "./Stats/StatsPage";
import DetailsPage from "./Stats/Details";
import UpdateEmail from "./formPages/UpdateEmail";
import ChangePassword from "./formPages/ChangePassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./formPages/Signup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authFunction } from "../Store/authentication.store";
import HomePageForError from "./components/HomePageForError";

function App() {
  const dispatch = useDispatch();
  const getLoginUserData = async function () {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch(
          "http://localhost:5000/getLoggedUserInfo",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        const {
          success,
          error,
          data: { email, username },
        } = await response.json();
        if (success) {
          dispatch(authFunction.setName({ name: username }));
          dispatch(authFunction.setAuthenticated({ auth: true }));
          dispatch(authFunction.setEmail({ email }));
        } else if (error) {
          localStorage.removeItem("token");
        } else if (!success) {
          console.log(success, error, email, username);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    getLoginUserData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      errorElement: <HomePageForError />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/leaderboard", element: <LeaderBoard /> },
        { path: "/about", element: <About /> },
        { path: "/login", element: <Login /> },
        {
          path: "/signup",
          element: <Signup />,
        },
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

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-left"
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        closeOnClick={true}
        closeButton={false}
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

export default App;
