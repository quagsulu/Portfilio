import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import About from "../components/about";
import Switcher from "../components/switcher";

const AboutPage = () => {
    return `
    ${Header()} 
    <div class="main-content">
            ${About()}
</div>
</div>
        ${Switcher()}
    `;
};
export default AboutPage;
