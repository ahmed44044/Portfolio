import './Projects.css'
import portfolioData from './ProjectsData'

export default function Projects() {
  return (
    <section className='projects' id='projects'>
       <div className="top-section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects-container">
        {portfolioData.map(({id,image,title,desc,github,demo})=>(
           <article key={id} className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="portfolio-item-btns">
            <a href={github} target='_blank' className='btn'>GitHub</a>
            <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        ))}
       
      </div>

    </section>
    )
}
