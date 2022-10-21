import { Route, Routes } from "react-router-dom";

// Components
import HomePage from "./components/home/HomePage";
import BlogPage from "./components/blog/BlogPage";
import Layout from "./components/layout";
import AuthorPage from "./components/author/AuthorPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
