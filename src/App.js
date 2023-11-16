import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Nav = styled.nav`
  & > a {
    color: white;
    margin-right: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const themeToggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={themeToggler}>Toggle Theme</button>
      <Router>
        <div>
          <Header>
            <div>Great Irbid</div>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
            </Nav>
          </Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
