import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

// MaterialUI
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/";

// Components
import HomePage from "./components/home/HomePage";
import BlogPage from "./components/blog/BlogPage";
import Layout from "./components/layout";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";

// Context
import ThemeContextProvider from "./context/ThemeContextProvider";
import { ThemeContext } from "./context/ThemeContextProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
