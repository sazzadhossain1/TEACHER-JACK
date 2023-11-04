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
import UserSales from "./components/UserSales/UserSales";

function App() {
  const tokenId = localStorage.getItem("token");
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
          path: "/confirm/:email/:token",
          element: <ConfirmVerificationSetPass></ConfirmVerificationSetPass>,
        },
        {
          path: "/businessScopes",
          element: <BusinessScopes></BusinessScopes>,
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
          loader: async ({ params }) => {
            return fetch(
              `https://app.teacherjackonline.com/api/user/buyings/${params.id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: `Bearer ${tokenId}`,
                },
                body: JSON.stringify(),
              }
            );
          },
          element: <UserBuying></UserBuying>,
        },

        // {
        //   path: "http://localhost:3000/confirm/sazzadtomal1@gmail.com/598413",
        //   loader: async ({ params }) => {
        //     return fetch(
        //       `https://app.teacherjackonline.com/api/confirm/${params.email}/${params.token}`,
        //       {
        //         headers: {
        //           "Content-Type": "application/json",
        //           Accept: "application/json",
        //           // Authorization: `Bearer ${token}`,
        //         },
        //         body: JSON.stringify(),
        //       }
        //     );
        //   },
        //   element: <ConfirmVerificationSetPass></ConfirmVerificationSetPass>,
        // },

        {
          path: "/userSales/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://app.teacherjackonline.com/api/user/sales/${params.id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: `Bearer ${tokenId}`,
                },
                body: JSON.stringify(),
              }
            );
          },
          element: <UserSales></UserSales>,
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
