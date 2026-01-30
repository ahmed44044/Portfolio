import './Skills.css'
import SkillsData from './SkillsCard'
// import { BsPatchCheckFill } from "react-icons/bs";

export default function Skills() {
  return (
    <section className='skills' id='skills'>
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container-skills">
        {SkillsData.map(({id,image,title,disc})=>(
          <article key={id} className="card-skill">
            <div className="icon">
              <img src={image} alt="skills image" />
            </div>

            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>

        ))}
       
      </div>
    </section>
  )
}
