import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trajet from "../../Assets/Projects/trajet.png";
import mario from "../../Assets/Projects/mario.png";
import lost from "../../Assets/Projects/lost.png";
import weather from "../../Assets/Projects/weather.png";
import login from "../../Assets/Projects/login.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lost}
              isBlog={false}
              title="WINO"
              description="Lost and Found is a web application built with Node.js that enables users to report and track lost and found items within a community."
              ghLink="https://github.com/OnsJabbes/LostandFound.git"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="User authentication system"
              description="A security framework for managing user authentication, including login and registration processes, to ensure secure access to systems and applications."
              ghLink="https://github.com/OnsJabbes/Authentication-System.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trajet}
              isBlog={false}
              title="trajet"
              description="Trajet Map is a web application designed to visualize and manage routes and trips. It provides an intuitive interface for creating, editing, and viewing routes on an interactive map. This project leverages modern web technologies to deliver a seamless user experience."
              ghLink="https://github.com/OnsJabbes/trajet_map.git"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="forecast"
              description="The Weather App, built with the OpenWeatherMap API and Vanilla JavaScript, provides real-time updates on current temperature, air quality index, real feel, humidity, highest and lowest temperatures, wind speed and direction, visibility, pressure, and sunrise and sunset times."
              ghLink="https://github.com/OnsJabbes/PRODIGY-WD-05.git"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
