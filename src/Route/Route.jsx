import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Blog from "../Components/Blog/Blog";
import GetInvolved from "../Components/GetInvolved/GetInvolved";
import PrivateRoute from "./PrivateRoute";
import HolidayParty from "../Components/Home/CardRouter/HolidayParty";
import Celebration from "../Components/Home/CardRouter/Celebration";
import Corporate from "../Components/Home/CardRouter/Corporate";
import PartyPets from "../Components/Home/CardRouter/PartyPets";
import BirthdayParty from "../Components/Home/CardRouter/BirthdayParty";
import Franshise from "../Components/Home/CardRouter/Franshise";
import PageNotFound from "../Components/PageNotFound/PageNotFound";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/getInvolved",
        element: (
          <PrivateRoute>
            <GetInvolved></GetInvolved>
          </PrivateRoute>
        ),
      },
      {
        path: "/holidayparty",
        element: (
          <PrivateRoute>
            <HolidayParty></HolidayParty>
          </PrivateRoute>
        ),
      },
      {
        path: "/celebration",
        element: (
          <PrivateRoute>
            <Celebration></Celebration>
          </PrivateRoute>
        ),
      },
      {
        path: "/corporate",
        element: (
          <PrivateRoute>
            <Corporate></Corporate>
          </PrivateRoute>
        ),
      },
      {
        path: "/partypets",
        element: (
          <PrivateRoute>
            <PartyPets></PartyPets>
          </PrivateRoute>
        ),
      },
      {
        path: "/birthdayParties",
        element: (
          <PrivateRoute>
            <BirthdayParty></BirthdayParty>
          </PrivateRoute>
        ),
      },
      {
        path: "/franshise",
        element: (
          <PrivateRoute>
            <Franshise></Franshise>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default myRouter;
