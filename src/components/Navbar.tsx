import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";

import { routesConfig } from "../routes/config";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        {routesConfig.map((route) => (
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            key={route.path}
          >
            <Link
              to={route.path}
              style={{ textDecoration: "none", color: "white" }}
            >
              {route.label}
            </Link>
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
};
