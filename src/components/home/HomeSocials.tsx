import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function HomeSocials() {
  return (
    <div className="home-socials">
      <a href="https://www.linkedin.com/in/ahmed-mahamoud-a72b27238"
      target="_blank"
      rel="noopener noreferrer"
    className="social-link"><FaLinkedin/></a>
      <a href="https://github.com/ahmed44044"
          target="_blank"
          rel="noopener noreferrer">
            <FaGithub/>
      </a>
      <a href="mailto:ahmedmamoud345@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Ahmed," target="_blank"><MdOutlineEmail/></a>
    </div>
  )
}
