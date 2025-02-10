import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConfig } from "./routes/config";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {routesConfig.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
