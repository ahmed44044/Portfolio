import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

import type { ReactNode } from "react";

export type ServiceType = {
  icon: ReactNode;
  title: string;
  description: string;
};

const servicesDetails:ServiceType[] =[
  {
    icon:<MdDesignServices className='icon'/>,
    title:'Web Design',
    description:'Designing smooth and engaging web experiences'
  },
  {
    icon: <IoIosRocket className='icon'/>,
    title: "Fast Performance",
    description: "Optimized websites with high performance",
  },
  {
    icon: <FaCode className='icon'/>,
    title: "Web Development",
    description: "Clean and scalable code for modern web apps",
  },

]


export default  servicesDetails;