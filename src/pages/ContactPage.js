import Header from "../components/Header";
import Contact from "../components/contact";
import Switcher from "../components/switcher";
const ContactPage = () => {
  return `
  ${Header()} 
  <div class="main-content">
  ${Contact()}
  </div>
  </div>
  ${Switcher()}
  
  `
}

export default ContactPage