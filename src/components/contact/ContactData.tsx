
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import type { ReactNode } from 'react';

type ContactItem = {
  id: number;
  icon: ReactNode;
  title: string;
  info: string;
  link: string;
};

const ContactData:ContactItem[] = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "ahmedmamoud345@gmail.com",
    link:"mailto:ahmedmamoud345@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Ahmed,",
  },
  {
    id:2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "ahmed Mahmoud",
    link: "https://m.me/@ahmed.mahamoud.902266",
  },
  {
    id:3,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "01019377928",
    link: "https://api.whatsapp.com/send?phone=201019377928",
  }
]

export default ContactData;