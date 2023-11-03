import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import HeroDetailsPage from "./components/HeroDetailsPage/HeroDetailsPage";
import StepDetailsPage from "./components/StepDetailsPage/StepDetailsPage";
import Videos from "./components/Videos/Videos";
import MeetOurCeo from "./components/MeetOurCeo/MeetOurCeo";

import BookDownloadPage from "./components/BookDownloadPage/BookDownloadPage";
import BookDetailsPage from "./components/BookDetailsPage/BookDetailsPage";
import BusinessScopes from "./components/BusinessScopes/BusinessScopes";
import Courses from "./components/Courses/Courses";
import ClickHereGetInfo from "./components/ClickHereGetInfo/ClickHereGetInfo";
import ConfirmVerificationSetPass from "./components/ConfirmVerificationSetPass/ConfirmVerificationSetPass";
import UserBuying from "./components/UserBuying/UserBuying";

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
          path: "/meetOurCeo",
          element: <MeetOurCeo></MeetOurCeo>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/businessScopes",
          element: <BusinessScopes></BusinessScopes>,
        },
        {
          path: "/confirm",
          element: <ConfirmVerificationSetPass></ConfirmVerificationSetPass>,
        },
        {
          path: "/clickHereGetInfo",
          element: <ClickHereGetInfo></ClickHereGetInfo>,
        },
        {
          path: "/bookDetailsPage",
          loader: async () => {
            return fetch("https://app.teacherjackonline.com/api/product");
          },
          element: <BookDetailsPage></BookDetailsPage>,
        },
        {
          path: "/bookDownloadPage/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://app.teacherjackonline.com/api/product/${params.id}`
            );
          },
          element: <BookDownloadPage></BookDownloadPage>,
        },
        {
          path: "/userBuying/:id",
          // loader: async ({ params }) => {
          //   return fetch(
          //     `https://app.teacherjackonline.com/api/user/buyings/${params.id}`
          //   );
          // },
          element: <UserBuying></UserBuying>,
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
