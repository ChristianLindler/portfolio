import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { darkTheme, lightTheme } from './utils/Themes.js'
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import HeroSection from "./components/HeroSection";
import Skills from './components/Skills/index.jsx';
import Projects from './components/Projects/index.jsx';
import Footer from './components/Footer/index.jsx';
import ProjectDetails from './components/ProjectDetails/index.jsx'


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)

  return (
    <div className="app">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Body>
            <Wrapper>
              <HeroSection />
            </Wrapper>
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal}/>
            </Wrapper>
            <Wrapper>
              <Education />
            </Wrapper>
            <Footer />
            {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
          </Body>
        </Router>
      </ThemeProvider>
      
    </div>
  );
};

export default App;
