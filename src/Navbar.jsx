import React, {useRef, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    const linksContainer = useRef(null);

    const newHandler = () => {
        console.log(linksContainer?.current?.getBoundingClientRect()?.height);
    }


    const containerStyles = {
        height: showLinks ? `${linksContainer?.current?.getBoundingClientRect()?.height}px` : '0px' 
    }
    
    

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            className="nav-toggle"
            onClick={() => {setShowLinks(!showLinks); newHandler()}}
          >
            <FaBars />
          </button>
        </div>
        <div  className='links-container' style={containerStyles}>
          <ul ref={linksContainer} className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-links'>
            {social.map((socialIcon) => {
                const {id, url, icon} = socialIcon;

                return <li key={id} >
                    <a href={url}>{icon}</a>
                </li>
            })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar