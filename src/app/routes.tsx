import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Reviews } from "./pages/Reviews";
import { FAQ } from "./pages/FAQ";
import { Team } from "./pages/Team";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "reviews", Component: Reviews },
      { path: "faq", Component: FAQ },
      { path: "team", Component: Team },
      { path: "*", Component: NotFound },
    ],
  },
]);
