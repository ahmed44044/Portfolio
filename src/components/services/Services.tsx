import './Services.css'
import servicesDetails from './ServicesDetails'


export default function Services() {
  return (
    <section id='services'>
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container-services">
        { servicesDetails.map(({icon,title,description})=>(
           <article key={title} className='card'>
            {icon}
            <h3>{title}</h3>
            <p className='text-light'>{description}</p>
           </article>
          
        ))

        }
       
      </div>
    </section>
  )
}
