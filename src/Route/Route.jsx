import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import CardDetails from "../pages/CardDetails/CardDetails";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "cardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);

export default myCreatedRoute;
