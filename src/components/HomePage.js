import React, { useState, useEffect }  from "react"
import { Link } from "react-router-dom";
import fasting2 from "../images/fasting2.png"
import mood from "../images/mood.png"
import mood2 from "../images/mood2.png"
import Navbar from "../components/Navbar"



function HomePage() {

    const handleClickScroll = () => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='content'>
                <div><h1>Hi, I'm Anastasia Khomenko</h1></div>
                <div className='about'> I am a software developer. I specialize in JS, React, NodeJS, Python.</div>
                <div className='projects-cont'>
                    <button className="btn-scroll" onClick={handleClickScroll}>Projects</button>
                </div>
                <div className="home-contact">
                    <div className='email-div'>Email: anastasiakho888@gmail.com</div>
                    <div className='phone-div'>Phone: (646) 937-4286</div>
                </div>
            </div>

            <div className='projects-container' id='projects'>

            <div className="project">
                    <div className='project-pic'>
                        <div className="overlay overlay-2-narrow"><h2>Mood Forecaster</h2></div>
                        <div className='column dark-purple'>
                            <img src={mood} alt='mood-project-pic' className='pic' id='project-2-pic'/>
                        </div>
                    </div>
                    <div className='project-desc'>
                        <h3>Mood Forecaster</h3>
                        <p>Find out how weather affects your mood and energy levels. This app was built using Python, SQLAlchemy, Flask, JS</p>
                        <div><p>
                            <a href='https://github.com/onefastcat/mood_forecaster' target = '_blank' rel="noopener noreferrer" >GitHub</a>
                            <a href='https://moodforecaster.herokuapp.com/home' target='_blank' rel="noopener noreferrer" >Demo</a>
                        </p></div>
                    </div>
                </div>
                <div className="project">
                    <div className='project-pic'>
                        <div className="overlay overlay-1-narrow"><h2>Intermittent Fasting Scheduler</h2></div>
                        <div className='column dark-purple'>
                            <img src={fasting2} alt='fasting-scheduler-pic' className='pic' id='pic'/>
                        </div>
                    </div>

                    <div className='project-desc'>
                        <h3>IF scheduler</h3>
                        <p>This web app allows you to schedule cheat meals and still stay on track with your intermittent fasting regimen.
                            Technology used to build it: Python, Flask, Jinja2, JS.
                        </p>
                        <div>
                            <a href='https://github.com/onefastcat/Intermittent-Fasting' target = '_blank' rel="noopener noreferrer" >GitHub</a>
                            <a href='https://intermittent-fasting-scheduler.herokuapp.com/' target='_blank' rel="noopener noreferrer" >Demo</a></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage;
