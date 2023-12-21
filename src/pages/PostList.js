import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTheme } from "@mui/material/styles";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  postLink: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    height: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
  },
  searchField: {
    marginBottom: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

const MAX_BODY_LENGTH = 50;

const TruncatedBody = ({ body }) => {
  return (
    <Typography variant="body2">
      {body.length > MAX_BODY_LENGTH
        ? `${body.substring(0, MAX_BODY_LENGTH)}...`
        : body}
    </Typography>
  );
};

const PostList = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const filteredPosts = response.data.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setPosts(filteredPosts);
      })
      .catch((error) => {
        console.error("Erro ao obter dados das postagens:", error);
      });
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Header />

      <TextField
        label="Pesquisar"
        value={searchTerm}
        onChange={handleSearchChange}
        variant="outlined"
        margin="normal"
        className={classes.searchField}
      />
      <Grid container spacing={isMobile ? 2 : 3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <RouterLink to={`/post/${post.id}`} className={classes.postLink}>
              <Card className={classes.card}>
                <CardContent>
                  <img
                    src={`https://source.unsplash.com/300x200/?blog`}
                    alt={`Imagem ${post.title}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography
                    variant="h6"
                    style={{ fontSize: isMobile ? "16px" : "18px" }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ fontSize: isMobile ? "12px" : "14px" }}
                  >
                    {post.body}
                  </Typography>
                  <TruncatedBody body={post.body} />
                  <Button
                    component={RouterLink}
                    to={`/post/${post.id}`}
                    size="small"
                    color="primary"
                    className={classes.button}
                    style={{ marginTop: theme.spacing(2) }}
                  >
                    Ver mais
                  </Button>
                </CardContent>
              </Card>
            </RouterLink>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default PostList;
