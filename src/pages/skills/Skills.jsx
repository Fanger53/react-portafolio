import React from 'react';
import './skills.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mongo from '../../assets/img/mongo.gif';
import rails from '../../assets/img/rails.gif';
import docker from '../../assets/img/docker.gif';
import postgresql from '../../assets/img/postgresql.gif';
import sql from '../../assets/img/sql.gif';
import js from '../../assets/img/js.gif';
import react from '../../assets/img/react.gif';
import redux from '../../assets/img/redux.gif';
import uiux from '../../assets/img/ui-ux.gif';
import test from '../../assets/img/test.gif';
import problem1 from '../../assets/img/pro.gif';
import problem2 from '../../assets/img/problem-solve.gif';
import problem3 from '../../assets/img/problem.gif';
import problem4 from '../../assets/img/problems.gif';
import self from '../../assets/img/self.gif';
import workTeam from '../../assets/img/work-team.gif';
import time from '../../assets/img/time.gif';
import colorSharp from "../../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12  align-content-center">
                    <div className=" skill-bx ">
                        <h2 className='text-white'>Skills</h2>
                        <p>As a web developer, I possess a wide range of technical skills and expertise in various programming languages, web technologies, and development frameworks and also soft skills</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider ">
                            <div className="item">
                                <img src="https://pa1.narvii.com/6691/c68311c46bfa99b5df249096dde45747ec815c8e_00.gif" alt="Image ruby" />
                                <h5 className='text-white'>Ruby</h5>
                            </div>
                            <div className="item">
                                <img src={rails} alt="Image rails" />
                                <h5 className='text-white'>Ruby on Rails</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image docker" />
                                <h5 className='text-white'>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="Image postgres" />
                                <h5 className='text-white'>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image mongo" />
                                <h5 className='text-white'>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image sql" />
                                <h5 className='text-white'>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image js" />
                                <h5 className='text-white'>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image react" />
                                <h5 className='text-white'>React</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="Image redux" />
                                <h5 className='text-white'>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={uiux} alt="Image ui" />
                                <h5 className='text-white'>UI/UX</h5>
                            </div>
                            <div className="item">
                                <img src={test} alt="Image tst" />
                                <h5 className='text-white'>Test Driven Development and Unit Test </h5>
                            </div>
                            <div className="item">
                                <img src={problem1} alt="Image problem" />
                                <h5 className='text-white'>Problem Resolving</h5>
                            </div>
                            <div className="item">
                                <img src={problem2} alt="Image s" />
                                <h5 className='text-white'>Problem Resolving</h5>
                            </div>
                            <div className="item">
                                <img src={problem3} alt="Image sd" />
                                <h5 className='text-white'>Problem Resolving</h5>
                            </div>
                            <div className="item">
                                <img src={problem4} alt="Image fas" />
                                <h5 className='text-white'>Problem Resolving</h5>
                            </div>
                            <div className="item">
                                <img src={workTeam} alt="Image work" />
                                <h5 className='text-white'>Work Team</h5>
                            </div>
                            <div className="item">
                                <img src={self} alt="Image update" />
                                <h5 className='text-white'>Stay up-to-date on new Technologies</h5>
                            </div>
                            <div className="item">
                                <img src={time} alt="Image org" />
                                <h5 className='text-white'>Organisational and Time Management </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills