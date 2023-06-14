import { useEffect , useState ,router} from "../lib";
const Portfolio = () => {
    const [project, setproject] = useState([]);
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URI}/projects`)
        .then((respone) => respone.json())
        .then((data) => setproject(data));
    },[]);
    return `
    <!-- === Portfolio section start -->
    <section class="portfolio section" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="section-title padd-15">
                    <h2>Portfolio</h2>
                </div>
            </div>
            <div class="row">
                <div class="portfolio-heading padd-15">
                    <h2>My Last Project :</h2>
                </div>
            </div>
            <div class="row">
            ${project.map(project => {
                return `
                <!-- == portfolio item start  -->
                <div class="portfolio-item padd-15">
                    <div class="portfolio-item-inner shadow-dark">
                        <div class="portfolio-img">
                           <a href="#/project/${project.id}"> <img src="${project.image}" alt="">
                        </div>
                    </div>
                </div>
                <!-- == portfolio item end  -->
                `; 
            }
            
            ).join("")}

            </div>
        </div>
    </section>
    <!-- === Portfolio section end -->
    `;
};
export default Portfolio;