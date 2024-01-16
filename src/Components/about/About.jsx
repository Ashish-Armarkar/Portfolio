import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { BiCertification } from "react-icons/bi";
import ME2 from "../../Assets/imageAshish.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                Currently I'm working at Cojag Smart Technologies as
                Software developer.
              </small>
            </article>

          
            <article className="about__card">
            <MdOutlineCastForEducation className="about__icon" />
              <h5>Education</h5>
              <small>
                I did my Master of Computer Application from Tulsiram gaikwad
                patil college of engineering with A Grade
              </small>
            </article>
          

          
            <article className="about__card">
            <BiCertification className="about__icon" />
              <h5>Certifications</h5>
              <small>
                I completed Angela's Web development bootcamp from Udemy and
                also I did web development bootcamp from OdinSchool
              </small>
            </article>
          

          
            
          </div>
          
          <p>
            Aspiring Web Developer with a strong foundation in HTML, CSS, and
            JavaScript. Completed a 3-month internship where I worked on an
            object identification app with React-python tech-stack. Eager to
            continue learning and growing in front-end development. Passionate
            about coding and committed to staying updated with the latest trends
            and technologies in the field. Excited to apply my internship
            experience and knowledge in developing engaging web experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
