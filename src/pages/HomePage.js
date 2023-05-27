import Header from "../components/Header";
import Home from "../components/home";
import About from "../components/about";
// import Banner from "../components/banner"; 
import Service from "../components/services";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Switcher from "../components/switcher";
// import {posts} from "../dataFake";
const HomePage = () => { 
    return `
        ${Header()}
        ${Home()}
        ${About()}
        ${Service()}
        ${Portfolio()}
        ${Contact()}
        ${Switcher()}

    `;
};



export default HomePage;


