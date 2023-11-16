import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'


const Projects = ({openModal, setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I develop skills in my areas of interest through projects
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Quantitative Finance' ?
            <ToggleButton active value="Quantitative Finance" onClick={() => setToggle('Quantitative Finance')}>Quantitative Finance</ToggleButton>
            :
            <ToggleButton value="Quantitative Finance" onClick={() => setToggle('Quantitative Finance')}>Quantitative Finance</ToggleButton>
          }
          <Divider />
          {toggle === 'Machine Learning' ?
            <ToggleButton active value="Machine Learning" onClick={() => setToggle('Machine Learning')}>Machine Learning</ToggleButton>
            :
            <ToggleButton value="Machine Learning" onClick={() => setToggle('Machine Learning')}>Machine Learning</ToggleButton>
          }
          <Divider />
          {toggle === 'Web App' ?
            <ToggleButton active value="Web App" onClick={() => setToggle('Web App')}>Web Apps</ToggleButton>
            :
            <ToggleButton value="Web App" onClick={() => setToggle('Web App')}>Web Apps</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.tags.includes(toggle))
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects