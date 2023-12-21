import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import {

  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      marginBottom: theme.spacing(3),
      textAlign: "center",
    },
    postImage: {
      width: "50%",
      height: "50%",
      objectFit: "cover",
      marginBottom: theme.spacing(2),
    },
  }));

const PostDetails = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter detalhes do post:", error);
      });
  }, [postId]);

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.header}>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <img
          src={`https://source.unsplash.com/400x300/?blog`}
          alt={`Imagem ${post.title}`}
          className={classes.postImage}
        />
      </div>

      <Card>
        <CardContent>
          <Typography variant="body1">{post.body}</Typography>
        
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetails;
