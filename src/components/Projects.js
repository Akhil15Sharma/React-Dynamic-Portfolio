import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Modal, Button } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Business Startup 1',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup 2',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup 3',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  console.log(selectedProject,"selected project")

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {props.pro.map((project, index) => (
                      
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`project-${index}`}>{`Project ${index + 1}`}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {props.pro.map((project, index) => (
                        <Tab.Pane key={`pane-${index}`} eventKey={`project-${index}`}>
                          <Row>
                            <ProjectCard
                              key={index}
                              project={project}
                              onClick={() => handleProjectClick(project)}
                            />
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
      {selectedProject && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.techStack}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={"https://portfolio-image-store.s3.ap-south-1.amazonaws.com/"+selectedProject.image.public_id} alt="Project" />
            <p className='text-black mt-4  '>{selectedProject.techStack}</p>
            <p className='text-black mt-4  '> {selectedProject.description}
                    <br/>
                    <a className='text-black mt-2' href='/'>Link</a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};
