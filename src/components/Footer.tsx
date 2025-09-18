
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import skillxLogo from '../assets/skillx_logo.jpg'; 
function Footer() {
  return (
    <footer style={{ background: "#23263b", color: "#fff", fontFamily: 'Segoe UI, Arial, sans-serif', marginTop: 60 }}>
      <div className="container pt-4 pb-4">
        <div className="row">
          {/* Company column */}
          <div className="col-sm-4 col-12 mb-4 mb-sm-0">
              <Link to="/" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
    <img
      src={skillxLogo}
      alt="skillX-Win Academy Logo"
      style={{ height: '50px', objectFit: 'contain' }}
    />
  </Link>
            <h6 className="text-uppercase text-light mb-2" style={{ fontSize: '1em', fontWeight: 600 }}>Company</h6>
            <ul className="list-unstyled mb-3" style={{ fontSize: '0.99em', fontWeight: 400 }}>
              <li><a href="https://www.wizx.org/" className="text-light text-decoration-none">About Us</a></li>
              <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>  
              <li><Link to="/privacy" className="text-light text-decoration-none">Terms & Conditions</Link></li>
              <li><a href="tel:8169600408" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Our Head Office column */}
          <div className="col-sm-4 col-12 mb-4 mb-sm-0">
            <h6 className="text-uppercase text-light mb-2" style={{ fontSize: '1em', fontWeight: 600 }}>Our Head Office</h6>
            <div style={{ fontSize: '0.99em', fontWeight: 400 }}>
              <div className="mb-1">Wizdom Ed., First Floor, Takshila Building, Opp Janatha Delux Patthumudi/Coastal Laundry, Ballalbagh, Mangalore - 575003</div>
              <div className="mb-1">hello@wizx.org</div>
              <div className="mb-1">+91 8169600408</div>
            </div>
          </div>

          {/* Follow WiZdomEd column */}
          <div className="col-sm-4 col-12 d-flex flex-column" >
            <h6 className="text-uppercase text-light mb-2" style={{ fontSize: '1em', fontWeight: 600 }}>
              Follow WiZdom
            </h6>
            <div className="d-flex gap-4" style={{ fontSize: 28 }}>
              <a href="https://facebook.com/share/1BLG8uru6c/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#3b5998' }}>
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/wizdom.ed" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#E4405F' }}>
                <FaInstagram />
              </a>
              <a href="https://wizx.org" target="_blank" rel="noopener noreferrer" aria-label="Google" style={{ color: '#DB4437' }}>
                <FcGoogle />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#0A66C2' }}>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="container pb-3 pt-3">
        <div className="text-center text-light" style={{ fontSize: '0.97em', opacity: 0.92 }}>
          © 2025 skillX-Win Academy. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
