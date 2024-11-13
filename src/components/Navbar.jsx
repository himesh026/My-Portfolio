import logo from "../assets/himeshdhakalogo.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="Logo" className="mx-2 w-10 h-10  max-w-xs object-contain" /> */}
        {/* <h1>Hd</h1> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/himeshdhaka/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/himesh026" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
        {/* Instagram */}
        <a href="https://www.instagram.com/himesh_dhaka/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        
        {/* Twitter */}
        <a href="https://x.com/HimeshDhaka?t=GSJECJi40NE7W6i3b_jrMA&s=09" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
