import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
      <footer className="footer">
        <a href="mailto:cristianastullidlc@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
        <a href="www.linkedin.com/in/cristian-astulli-de-la-cruz-205784292" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="tel:+541158485483">
          <FontAwesomeIcon icon={faPhone} className="icon" />
        </a>
      </footer>
    );
  }
export default Footer;