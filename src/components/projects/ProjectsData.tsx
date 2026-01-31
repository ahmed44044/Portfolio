import IMG1 from '../../assets/image-07.jpg'
import IMG2 from '../../assets/image-03.jpg'
import IMG3 from '../../assets/image-02.jpg'
import IMG4 from '../../assets/image-01.jpg'
import IMG5 from '../../assets/image-06.jpg'
import IMG6 from '../../assets/image-04.jpg'


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
    title: '🛒 E-commerce Web Application',
    desc:'E-commerce App built with React & TypeScript using DummyJSON API, featuring product browsing, cart management, mock authentication, and a fully responsive modern UI.',
    github: 'https://github.com/ahmed44044/Ecommerce',
    demo: 'https://ecommerce-plum-five-32.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movies Web App',
    desc:'A responsive movie web app featuring dynamic browsing, search, and sleek user experience.',
    github: 'https://github.com/ahmed44044/Movies',
    demo: 'https://ahmed44044.github.io/Movies/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Smart Login System',
    desc:'Responsive login & sign‑up interface with interactive validation.Responsive layout for different screen sizes',
    github: 'https://github.com/ahmed44044/smart_login',
    demo: 'https://ahmed44044.github.io/smart_login/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Driver Scheduling Dashboard',
    desc:'React dashboard for managing drivers, routes, and transportation logistics responsive design ',
    github: 'https://github.com/ahmed44044/Dashboard-Driver',
    demo: 'https://dashboard-driver.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Mountain View Landing Page',
    desc: 'Responsive real estate landing page showcasing luxury communities and lifestyle.',
    github: 'https://github.com/ahmed44044/Mountain_View',
    demo: 'https://ahmed44044.github.io/Mountain_View/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weather App',
    desc: 'A responsive Weather App that displays current weather data for searched cities using a weather API.',
    github: 'https://github.com/ahmed44044/Weather_Api',
    demo: 'https://ahmed44044.github.io/Weather_Api/'
  }
];


export default portfolioData;