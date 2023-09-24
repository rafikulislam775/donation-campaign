import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default myCreatedRoute;
