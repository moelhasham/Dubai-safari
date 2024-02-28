import "./footer.css"

import {languages , currencies} from "../../data"
import SelectBox from "./SelectBox"
import FooterIcons from "./FooterIcons"


function Footer() {
  return (
    <footer className="footer">
           <div className="footer-item select-box-weapper">
               <SelectBox languages={languages} label="Languages" />
               <SelectBox languages={currencies} label="Currencies" />
           </div>
        <div className="footer-item">
            <h3 className="footer-item-title">support</h3>
            <ul className="footer-item-list">
                <li className="footer-item-link">Contact</li>
                <li className="footer-item-link">Legal Notice</li>
                <li className="footer-item-link">Privacy Policy</li>
                <li className="footer-item-link">General trems</li>
                <li className="footer-item-link">Sitemap</li>
            </ul>
        </div>
        <div className="footer-item">
            <h3 className="footer-item-title">Company</h3>
            <ul className="footer-item-list">
                <li className="footer-item-link">About Us</li>
                <li className="footer-item-link">Careers</li>
                <li className="footer-item-link">Blog</li>
                <li className="footer-item-link">Press </li>
                <li className="footer-item-link">Gift Cards</li>
            </ul>
        </div>
        <div className="footer-item">
            <h3 className="footer-item-title">Work With Us</h3>
            <ul className="footer-item-list">
                <li className="footer-item-link">Become a Supplier</li>
                <li className="footer-item-link">Become an Affilhjuujikikikiju</li>
     
            </ul>
          <FooterIcons />
          <div className="footer-copy-right">
            Copyright &copy; 2022 Dubai Safari
          </div>
        </div>
    </footer>
  )
}

export default Footer