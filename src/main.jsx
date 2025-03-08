import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import Reason from "./assets/Component/Reason/Reason";
import Opportunities from "./assets/Component/Opportunities/Opportunities";
import Security from "./assets/Component/Security/Security";
import Testimonial from "./assets/Component/Home/Testimonal/Testimonal";
import Price from "./assets/Component/Price/Price";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Reason",
        element: <Reason></Reason>,
      },
      {
        path: "/Opportunities",
        element: <Opportunities></Opportunities>,
      },
      {
        path: "/Security",
        element: <Security></Security>,
      },
      {
        path: "/Testimonial",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/Price",
        element: <Price></Price>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
