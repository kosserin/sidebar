import React, {useContext} from 'react';
import rocketImage from '../../assets/rocket.png';
import sunImage from '../../assets/sun.png';
import ufoImage from '../../assets/ufo.png';
import astronautImage from '../../assets/astronaut.png';
import satelliteImage from '../../assets/satellite.png';
import instagramImage from '../../assets/instagram.png';
import facebookImage from '../../assets/facebook.png';
import twitterImage from '../../assets/twitter.png';
import linkedinImage from '../../assets/linkedin.png';
import discordImage from '../../assets/discord.png';
import {FaTimes} from '../../../node_modules/react-icons/fa';
import {AppContext} from '../../context/context';

import styles from './Sidebar.module.css';

const Sidebar = () => {

  const ctx = useContext(AppContext);

  return (
    <aside className={`${ctx.sidebarState && styles['show-sidebar']}`}>
    {/* HEADER */}
      <header>
        <a href="#" className={styles.logo}>
          <img src={rocketImage} alt="rocket" />
          <span>Rockoss</span>
        </a>
        <span onClick={() => ctx.onHideSidebar()}><FaTimes /></span>
      </header>
      {/* NAV */}
      <nav>
        <ul className={styles['nav-links']}>
          <li>
            <a href="#">
              <img src={sunImage} alt="sun" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ufoImage} alt="ufo" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={astronautImage} alt="astronaut" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={satelliteImage} alt="satellite" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* FOOTER */}
      <footer>
        <ul className={styles['social-links']}>
          <li>
            <a href="#">
              <img src={instagramImage} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebookImage} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedinImage} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={discordImage} alt="discord" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitterImage} alt="twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </aside>
  )
}

export default Sidebar