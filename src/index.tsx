import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import Theme, { GlobalStyles } from "./utils/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/solutions",
        element: <SolutionsPage />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/test",
        element: <TestPage />,
        errorElement: <NotFoundPage />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />

            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
