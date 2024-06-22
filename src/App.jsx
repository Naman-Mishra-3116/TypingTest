import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import LeaderBoard from "./Pages/LeaderBoard";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import RootElement from "./Pages/RootElement";
import Reset from "./Pages/Reset";


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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
