import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 40,
    borderRadius: "50%",
    height: "auto",
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();

  const randomBlogImageUrl = "https://source.unsplash.com/40x40/?blog";

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.title}>
          <img src={randomBlogImageUrl} alt="Logo" className={classes.logo} />
          <Typography variant="h6">Meu Blog</Typography>
        </div>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/">
          Sobre
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
