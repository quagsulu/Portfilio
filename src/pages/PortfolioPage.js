import Header from "../components/Header";
import Portfolio from "../components/portfolio";
import Switcher from "../components/switcher";


const PortfolioPage = () => {
  return `
  
  ${Header()}
  <div class="main-content">
  ${Portfolio()}
  </div>
  </div>
  ${Switcher()}
  `
}

export default PortfolioPage