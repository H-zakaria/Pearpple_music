import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "./styles/reset.css";
import Layout from "./routes/layout.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import BrowsingPage from "./routes/BrowsingPage.tsx";
import RadioPage from "./routes/RadioPage.tsx";
import SearchingPage from "./routes/SearchingPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        path: "/browse",
        element: <BrowsingPage />,
      },
      {
        path: "/radio",
        element: <RadioPage />,
      },
      {
        path: "/search",
        element: <SearchingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
