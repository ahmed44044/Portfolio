import './About.css'
import ImageMe from '../../assets/me-about.jpg'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section className='about' id='about'>
      <div className="top-section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ImageMe} alt='Image about me' />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>Fresh Graduation </small>
            </div>

            <div className="about-card">
              <FiUsers className='about-icon'/>
              <h5>Client</h5>
              <small>Personal & School Projects</small>
            </div>

            <div className="about-card">
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </div>
          </div>
          <p>
            Front-End Developer skilled in building responsive, user-friendly web apps with modern JavaScript frameworks. Seeking to contribute to
            dynamic teams and grow technical expertise.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
