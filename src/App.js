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
import UseBuyingDetails from "./components/UseBuyingDetails/UseBuyingDetails";
import AffiliateProgram from "./components/AffiliateProgram/AffiliateProgram";
import Faq from "./components/Faq/Faq";
import JobOpportunities from "./components/JobOpportunities/JobOpportunities";
import BasicEnglishCommunication from "./components/BasicEnglishCommunication/BasicEnglishCommunication";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import SetForgetPassword from "./components/SetForgetPassword/SetForgetPassword";
import RemoteJobBookDownload from "./components/RemoteJobBookDownload/RemoteJobBookDownload";
import BookInfo from "./components/BookInfo/BookInfo";

function App() {
  const tokenId = localStorage.getItem("token");
  const id = localStorage.getItem("userId");
  // console.log(id);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://app.teacherjackonline.com/api/product");
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch("https://app.teacherjackonline.com/api/product");
          },
          element: <Home></Home>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/jobOpportunities",
          element: <JobOpportunities></JobOpportunities>,
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
          path: "/basicEnglishCommunication",
          element: <BasicEnglishCommunication></BasicEnglishCommunication>,
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
          path: "/affiliateProgram",
          element: <AffiliateProgram></AffiliateProgram>,
        },
        {
          path: "/confirm/:email/:token",
          element: <ConfirmVerificationSetPass></ConfirmVerificationSetPass>,
        },
        {
          path: "/forgetPassword",
          element: <ForgetPassword></ForgetPassword>,
        },
        {
          path: "/forget_password/:token",
          element: <SetForgetPassword></SetForgetPassword>,
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
          path: "/forgetPassword",
          element: <ForgetPassword></ForgetPassword>,
        },

        // new //
        {
          path: "/remoteJobBookDownload/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://app.teacherjackonline.com/api/product/${params.id}`
            );
          },
          element: <RemoteJobBookDownload></RemoteJobBookDownload>,
        },

        {
          path: "/bookInfo",
          element: <BookInfo></BookInfo>,
        },
        // ---------------- //

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

        // -------------- userBuying -----------------//

        {
          path: "/userBuying",
          loader: async () => {
            const id = localStorage.getItem("userId");
            console.log(id);
            try {
              const result = await fetch(
                `https://app.teacherjackonline.com/api/user/buyings/${id}`,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${tokenId}`,
                  },
                }
              );

              const data = await result.json();
              console.log(data);
              return data;
            } catch (error) {
              console.error("Error fetching data:", error);
              throw error; // Rethrow the error to handle it elsewhere if needed
            }
          },
          element: <UserBuying></UserBuying>,
        },

        // --------------
        {
          path: "/useBuyingDetails",
          element: <UseBuyingDetails></UseBuyingDetails>,
        },
        // ---------------

        // ---------------
        {
          path: "/userSales",
          loader: async () => {
            const id = localStorage.getItem("userId");
            return fetch(
              `https://app.teacherjackonline.com/api/user/sales/${id}`,
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
        // -----------------
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
