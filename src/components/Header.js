import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  menu: {
    color: "#fff",
    textDecoration: "none",
    marginRight: theme.spacing(2),
  },
  activeMenu: {
    fontWeight: "bold",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Vog Code Challenge
          </Typography>
          <NavLink
            to="/home"
            className={classes.menu}
            activeClassName={classes.activeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/universities"
            className={classes.menu}
            activeClassName={classes.activeMenu}
          >
            Universities
          </NavLink>
          <NavLink
            to="/postal-lookup"
            className={classes.menu}
            activeClassName={classes.activeMenu}
          >
            Postal Lookup
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
