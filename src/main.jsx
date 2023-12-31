import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NotFound from "./routes/NotFound";
import QuizPage from "./routes/QuizPage";

import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";
import QuizContextProvider from "./contexts/QuizContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizContextProvider>
    <RouterProvider router={router} />
  </QuizContextProvider>
);
