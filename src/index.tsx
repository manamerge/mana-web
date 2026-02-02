import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import Theme, { GlobalStyles } from "./utils/Theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/MMPage/MMPage";
import AboutPage from "./pages/TheTeamPage/TheTeamPage";
import SolutionsPage from "./pages/WhyUsPage/WhyUsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import TestPage from "./pages/LetsTalkPage/LetsTalkPage";
import MainLayout from "./layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "theteam", element: <AboutPage /> },
            { path: "whyus", element: <SolutionsPage /> },
            { path: "letstalk", element: <TestPage /> },
            { path: "*", element: <NotFoundPage /> }
        ]
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
