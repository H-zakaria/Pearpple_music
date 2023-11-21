import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./styles/reset.css";
import Root from "./routes/root";
import ErrorPage from "./routes/ErrorPage.tsx";
import BrowsingPage from "./routes/BrowsingPage.tsx";
import RadioPage from "./routes/RadioPage.tsx";
import SearchingPage from "./routes/SearchingPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
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
