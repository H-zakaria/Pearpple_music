import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "./styles/reset.css";
import Layout from "./routes/layout.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import BrowsingPage from "./routes/browsing_page/BrowsingPage.tsx";
import RadioPage from "./routes/radio_page/RadioPage.tsx";
import SearchingPage from "./routes/SearchingPage.tsx";
import ListenNow from "./routes/listen_now/ListenNow.tsx";
import TestEmbla from "./routes/TestEmbla.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        path: "/listen_now",
        element: <ListenNow />,
      },
      {
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
