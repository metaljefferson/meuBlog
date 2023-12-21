import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PostDetails from "./pages/PostDetails";

// import Post from './components/Post';

const theme = createTheme({

});

function App() {
  const posts = [
    {
      id: 1,
      title: "Título da Postagem 1",
      body: "Conteúdo da Postagem 1...",
    },
    {
      id: 2,
      title: "Título da Postagem 2",
      body: "Conteúdo da Postagem 2...",
    },

  ];

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<PostList posts={posts} />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
          <Route path="/post/:postId" element={<PostDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
