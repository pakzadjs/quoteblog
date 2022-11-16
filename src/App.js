import { Route, Routes } from "react-router-dom";

// Components
import HomePage from "./components/home/HomePage";
import BlogPage from "./components/blog/BlogPage";
import Layout from "./components/layout";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import { Paper } from "@mui/material";

function App() {
  return (
    <>
      <Paper>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs/:slug" element={<BlogPage />} />
            <Route path="/authors/:slug" element={<AuthorPage />} />
          </Routes>
        </Layout>
      </Paper>
    </>
  );
}

export default App;
