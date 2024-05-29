// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import ProjectsPage from "./pages/ProjectPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
