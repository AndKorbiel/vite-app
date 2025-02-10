import { CalcPage, Home } from "../pages";

export const routesConfig = [
  { element: <Home />, label: "Home", path: "/" },
  { element: <CalcPage />, label: "Calculators", path: "/calc" },
];
