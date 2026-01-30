import './Home.css'
import MeImg from '../../assets/ahmed-mahmoud-image.png'
import CV from '../../assets/Ahmed Mahmoud - junior front end developer cv (2).pdf'
import HomeSocials from './HomeSocials'

export default function Home() {
  return (
    <div className='home'>
      <div className="container home-container">
        <h4>Hello I'm</h4>
        <h1>Ahmed Mahmoud</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <div className="btns">
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        <div className="me">
          <img src={MeImg} alt="Image for me" />
        </div>
        <a href="#about" className='scroll-down'>Scroll Down</a>
        <HomeSocials/>
      </div>
    </div>
  )
}
