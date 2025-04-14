import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, CardContainer } from './AchievementsStyle';
import ProjectCard from '../Cards/ProjectCards';  // Make sure ProjectCard is reusable
import { achievements } from '../../data/constants';
import ProjectDetails from '../ProjectDetails';  // Import ProjectDetails component

const Achievements = ({ openModal, setOpenModal }) => {
  const [selectedProject, setSelectedProject] = useState(null); // Track the selected project

  const handleCardClick = (project) => {
    setSelectedProject(project); // Set the selected project when a card is clicked
    setOpenModal({ state: true, project: project }); // Open modal with the selected project
  };

  return (
    <Container id="achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <CardContainer>
          {achievements.map((project) => (
            <div key={project.id} onClick={() => handleCardClick(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </CardContainer>
      </Wrapper>

      {/* Conditionally render the ProjectDetails modal */}
      {openModal.state && selectedProject && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} project={selectedProject} />
      )}
    </Container>
  );
}

export default Achievements;
