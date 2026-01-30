import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/02. Laptop Mockup (Dark Style).jpg.jpeg';


type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  desc:string;
  github: string;
  demo: string;
};

const portfolioData:PortfolioItem[] = [
  {
    id: 1,
    image: IMG1,
    title: 'Movies Web App',
    desc:'A responsive movie web app featuring dynamic browsing, search, and sleek user experience.',
    github: 'https://github.com/ahmed44044/Movies',
    demo: 'https://ahmed44044.github.io/Movies/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Smart Login System',
    desc:'Responsive login & sign‑up interface with interactive validation.Responsive layout for different screen sizes',
    github: 'https://github.com/ahmed44044/smart_login',
    demo: 'https://ahmed44044.github.io/smart_login/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Driver Scheduling Dashboard',
    desc:'React dashboard for managing drivers, routes, and transportation logistics responsive design ',
    github: 'https://github.com/ahmed44044/Dashboard-Driver',
    demo: 'https://dashboard-driver.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Mountain View Landing Page',
    desc: 'Responsive real estate landing page showcasing luxury communities and lifestyle.',
    github: 'https://github.com/ahmed44044/Mountain_View',
    demo: 'https://ahmed44044.github.io/Mountain_View/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Weather App',
    desc: 'A responsive Weather App that displays current weather data for searched cities using a weather API.',
    github: 'https://github.com/ahmed44044/Weather_Api',
    demo: 'https://ahmed44044.github.io/Weather_Api/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Lawyer Website',
    desc:'Responsive lawyer website with professional layout and intuitive user experience.',
    github: 'https://github.com/ahmed44044/Lawyers',
    demo: 'https://ahmed44044.github.io/Lawyers/'
  }
];


export default portfolioData;