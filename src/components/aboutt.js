import { useEffect, useState } from "../lib";
const About = () => { 
    const [Post, setPost] = useState([]);
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URI}/Post`)
        .then((respone) => respone.json())
        .then((data) => setPost(data));
    },[]);
    
    return `
    <!-- === About session start -->
    <section class="about section" id="about">
        <div class="container">
            <div class="row">
                <div class="section-title padd-15">
                    <h2>About me</h2>
                </div>
            </div>
            <div class="row">
                <div class="about-content padd-15">
                    <div class="row">
                        <div class="about-text">
                            <h3>I'm Alimi Mousad and <span>Web Developer </span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eius, dolor. Delectus earum ullam obcaecati unde eos animi suscipit incidunt
                                odio deserunt.
                                Sapiente porro commodi quaerat facilis tempora nemo ea ducimus eos, temporibus
                                ad in iste impedit
                                deleniti dignissimos cupiditate? Asperiores commodi repellendus inventore,
                                libero debitis quidem
                                numquam magni amet veniam veritatis? Animi doloremque recusandae error.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="personal-info padd-15">
                            <div class="row">
                                <div class="info-item padd-15">
                                    <p> Birth Day : <span>19 / 11 / 2003</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p> Age : <span>20</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p> Age : <span>20</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p> Email : <span>quagsulu1911@gmail.com</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p> Phone : <span>0981896360 </span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p> Phone : <span>0981896360 </span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p> City : <span>Thanh Hoa</span></p>
                                </div>
                                <div class="info-item padd-15">
                                    <p> Freelnace : <span>Availible</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="buttons padd-15">
                                    <a href="#" class="btn"> Down CV</a>
                                    <a href="#contact" class="btn hire-me">Hire Me </a>
                                </div>
                            </div>
                        </div>
                        <div class="skills padd-15">
                            <div class="row">
                                <div class="skill-item padd-15">
                                    <h5>CSS</h5>
                                    <div class="progress">
                                        <div class="progress-in" style="width: 76%;"></div>
                                        <div class="skill-percent">76%</div>
                                    </div>
                                </div>
                                <div class="skill-item padd-15">
                                    <h5>HTML</h5>
                                    <div class="progress">
                                        <div class="progress-in" style="width: 76%;"></div>
                                        <div class="skill-percent">76%</div>
                                    </div>
                                </div>
                                <div class="skill-item padd-15">
                                    <h5>Javascript</h5>
                                    <div class="progress">
                                        <div class="progress-in" style="width: 76%;"></div>
                                        <div class="skill-percent">76%</div>
                                    </div>
                                </div>
                                <div class="skill-item padd-15">
                                    <h5>Nodejs</h5>
                                    <div class="progress">
                                        <div class="progress-in" style="width: 56%;"></div>
                                        <div class="skill-percent">56%</div>
                                    </div>
                                </div>
                                <div class="skill-item padd-15">
                                    <h5>Typescript</h5>
                                    <div class="progress">
                                        <div class="progress-in" style="width: 76%;"></div>
                                        <div class="skill-percent">76%</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="education">
                            <h3 class="title">
                                Education
                            </h3>
                            <div class="row">
                                <div class="timeline-box padd-15">
                                    <div class="timeline shadow-dark padd-15">
                                        <!-- === timline item -->

                                        <div class="timeline-item">
                                            <div class="circle-dot"></div>
                                            <h3 class="timeline-date">
                                                <i class="fa fa-calendar"></i> 2013 - 2015
                                            </h3>
                                            <h4 class="timeline-title">
                                                Master in Computer Science
                                            </h4>
                                            <p class="timeline-text">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Explicabo, itaque, eligendi nostrum fuga accusamus molestias
                                                maxime nobis eum fugiat corrupti quaerat excepturi veniam
                                                provident culpa.
                                            </p>
                                        </div>
                                        <div class="timeline-item">
                                            <div class="circle-dot"></div>
                                            <h3 class="timeline-date">
                                                <i class="fa fa-calendar"></i> 2013 - 2015
                                            </h3>
                                            <h4 class="timeline-title">
                                                Master in Computer Science
                                            </h4>
                                            <p class="timeline-text">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Explicabo, itaque, eligendi nostrum fuga accusamus molestias
                                                maxime nobis eum fugiat corrupti quaerat excepturi veniam
                                                provident culpa.
                                            </p>
                                        </div>
                                        <div class="timeline-item">
                                            <div class="circle-dot"></div>
                                            <h3 class="timeline-date">
                                                <i class="fa fa-calendar"></i> 2013 - 2015
                                            </h3>
                                            <h4 class="timeline-title">
                                                Master in Computer Science
                                            </h4>
                                            <p class="timeline-text">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Explicabo, itaque, eligendi nostrum fuga accusamus molestias
                                                maxime nobis eum fugiat corrupti quaerat excepturi veniam
                                                provident culpa.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="experience">
                            <h3 class="title">
                                Experience
                            </h3>
                            <div class="row">
                                <div class="timeline-box padd-15">
                                    <div class="timeline shadow-dark padd-15">
                                        <!-- === timline item -->

                                        <div class="timeline-item">
                                            <div class="circle-dot"></div>
                                            <h3 class="timeline-date">
                                                <i class="fa fa-calendar"></i> 2013 - 2015
                                            </h3>
                                            <h4 class="timeline-title">
                                                Master in Computer Science
                                            </h4>
                                            <p class="timeline-text">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Explicabo, itaque, eligendi nostrum fuga accusamus molestias
                                                maxime nobis eum fugiat corrupti quaerat excepturi veniam
                                                provident culpa.
                                            </p>
                                        </div>
                                        <div class="timeline-item">
                                            <div class="circle-dot"></div>
                                            <h3 class="timeline-date">
                                                <i class="fa fa-calendar"></i> 2013 - 2015
                                            </h3>
                                            <h4 class="timeline-title">
                                                Master in Computer Science
                                            </h4>
                                            <p class="timeline-text">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Explicabo, itaque, eligendi nostrum fuga accusamus molestias
                                                maxime nobis eum fugiat corrupti quaerat excepturi veniam
                                                provident culpa.
                                            </p>
                                        </div>
                                        <div class="timeline-item">
                                            <div class="circle-dot"></div>
                                            <h3 class="timeline-date">
                                                <i class="fa fa-calendar"></i> 2013 - 2015
                                            </h3>
                                            <h4 class="timeline-title">
                                                Master in Computer Science
                                            </h4>
                                            <p class="timeline-text">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Explicabo, itaque, eligendi nostrum fuga accusamus molestias
                                                maxime nobis eum fugiat corrupti quaerat excepturi veniam
                                                provident culpa.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- === About session edn -->
    `;
};
export default About;