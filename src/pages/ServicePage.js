import Header from "../components/Header";
import Service from "../components/services";
import Switcher from "../components/switcher";

 const ServicePage = () => {
  return `
  
  ${Header()}
  <div class="main-content">
  ${Service()}
  </div>
  </div>
  ${Switcher()}
  `
}

export default ServicePage