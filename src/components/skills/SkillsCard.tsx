import Css from '../../assets/css3.svg';
import Figma from '../../assets/figma.svg';
import Javascript from '../../assets/javascript.svg';
import Nodejs from '../../assets/nodejs.svg';
import ReactJS from '../../assets/react.svg';
import Tailwind from '../../assets/tailwindcss.svg';
import TS from '../../assets/ts.png'
import Redux from '../../assets/redux.png'


type Skill = {
  id: number;
  image: string;
  title: string;
  disc: string;
};

const SkillsData:Skill[] =[
  {
    id:1,
    image:Css,
    title:'CSS',
    disc:'Styling & Layout (UI Design)'
  },
  {
    id:2,
    image:Javascript,
    title:'JavaScript',
    disc:'Client-side Interactivity'
  },
  {
    id:3,
    image:ReactJS,
    title:'React',
    disc:'Frontend Framework'
  },
  {
    id:4,
    image:Tailwind,
    title:'TailwindCss',
    disc:'Utility-first Styling (UI)'
  },
  {
    id:5,
    image:Nodejs,
    title:'NodeJs',
    disc:'Backend & Web Server'
  },
  {
    id:6,
    image:Figma,
    title:'Figma',
    disc:'UI/UX Design & Prototyping'
  },
  {
    id:7,
    image:TS,
    title:'Typescript',
    disc:'Type-safe JavaScript development'
  },
 
  {
    id:8,
    image:Redux,
    title:'Redux',
    disc:'State management for React apps'
  },
]


export default SkillsData;