import React from 'react'


const About = (props) => {

    const SCREEN_CONSTANTS = { 
        description: "I'm started my career as a Web Developer since 2022. My focus is on the design and development of websites, especially in the Front-End Developer field. In making a website I am accustomed to using Tailwind or Boostrap to speed up me in building a responsive and interactive website.",
        highlights: {
            bullets: [
                "Web Development",      
                "UI/UX Design",
                "Graphic Design"
           ],
           heading: "Interest :"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    return (
        <section className='aboutme' id='about'>
        <div className="about-me-container screen-container fade-in" id={ props.id || ''}>
            <div className="about-me-parent ">
                <h2>About Me</h2>
            <div className="about-me-card">
                <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>
                    <div className="about-me-options">
                         <a href="https://drive.google.com/file/d/1PiYiWuibW2O7gymCQHUVsqazBMwluEu2/view?usp=sharing">
                            <button className="btn highlighted-btn"> Curriculum Vitae </button>
                         </a>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        </section>
    )
}

export default About;
