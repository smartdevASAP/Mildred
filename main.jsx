import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import "./index.css";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contacts from "./components/Contact/Contacts.jsx";
// import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<about />} />
      <Route path="Projects/Projects" element={<Projects />} />
      <Route path="Contacts/Contacts" element={<Contacts />} />
      <Route path="" element={<Header />} />
      <Route />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
