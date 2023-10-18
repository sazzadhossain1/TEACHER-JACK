import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import HeroDetailsPage from "./components/HeroDetailsPage/HeroDetailsPage";
import StepDetailsPage from "./components/StepDetailsPage/StepDetailsPage";
import Videos from "./components/Videos/Videos";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/heroDetailsPage",
          element: <HeroDetailsPage></HeroDetailsPage>,
        },
        {
          path: "/stepDetailsPage",
          element: <StepDetailsPage></StepDetailsPage>,
        },
        {
          path: "/videos",
          element: <Videos></Videos>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
