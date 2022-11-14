import { Container, Row, Col, Tab } from "react-bootstrap";
import { PortfolioCard } from "./Portfolio-Card";
import projImg1 from "../assets/img/MentalHack.png";
import projImg2 from "../assets/img/BMICalculator.png";
import projImg3 from "../assets/img/SkilMovie.png";
import TrackVisibility from 'react-on-screen';

export const Portfolio = () => {

  const projects = [
    {
      title: "MentalHack",
      description: "Website yang berisikan berita dan blog terbaru yang menjadi solusi terbaik dalam memahami diri dan solusi masalah hati lebih dalam.",
      imgUrl: projImg1,
      webUrl : "https://mentalhack.netlify.app",
    },
    {
      title: "BMI Calculator",
      description: "Website penghitung dan menentukan kategori berat badan seseorang",
      imgUrl: projImg2,
      webUrl : "https://bmi-calculator-v-1.netlify.app",
    },
    {
      title: "Skilmovie",
      description: "Website yang menampilkan list video yang teredia dan terbaru.",
      imgUrl: projImg3,
      webUrl : "https://movies-page-v-1.netlify.app",
    },
    
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p>Here are some projects that I have made before</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <PortfolioCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
