import React from "react";
import { Typography, Container, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  color_footer:{
    color: "black !important",

  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Meu Blog. Todos os direitos reservados.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Desenvolvido por:
          <Link href="https://github.com/metaljefferson/meuBlog" className={classes.color_footer} underline="hover" target="_blank">
            <strong>Jefferson Sousa de Paiva</strong>
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
