// import React from 'react'
import { useEffect ,useState } from '../../lib';

const AdminPage = () => {

        const [project, setproject] = useState([]);
        const [profile, setprofile] = useState([]);
      const [Post, setPost] = useState([]);
        useEffect(() =>{
            fetch(`${import.meta.env.VITE_API_URI}/projects`)
            .then((respone) => respone.json())
            .then((data) => setproject(data));
        },[]);
  useEffect(() =>{
      fetch(`${import.meta.env.VITE_API_URI}/posts`)
      .then((respone) => respone.json())
      .then((data) => setPost(data));
  },[]);
  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_URI}/profile/1`)
    .then((respone) => respone.json())
    .then((data) => setprofile(data));
},[]);
  useEffect (() =>{
    var typed = new Typed(".typing", {
        strings:["Student", "Web Developer", "A Man", "Ahihi"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true 
    }  );
    
    // console.log(1);
    // // == toggler style switcher
    const styleSwitcherToggle  = document.querySelector(".style-switcher-toggler");
    styleSwitcherToggle.addEventListener("click",() => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
    // hide style switcher scroll 
    window.addEventListener('scroll',() => {
        if(document.querySelector('.style-switcher').classList.contains("open")) {
        document.querySelector('.style-switcher').classList.remove("open");
        }
    });
    
    // 
    const alternate = document.querySelectorAll(".alternate-style");
    const colorweb = document.querySelectorAll("#color-web");
    colorweb.forEach((color) => {
        color.addEventListener("click",() => {
    
            alternate.forEach((style) => {
                if(color.getAttribute("class") == style.getAttribute("title")) {
                    style.removeAttribute("disabled");
                } 
                else {
                    style.setAttribute("disabled", "true");
                }
            })
        });
    
    })
    // test 
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon");
         document.body.classList.toggle("dark");
    });
    window.addEventListener("load",() => {
        if(document.body.classList.contains("dark")) {
            dayNight.querySelector('i').classList.add("fa-sun");
        } else {
            dayNight.querySelector('i').classList.add("fa-moon");
        }
    });
});

// useEffect(() =>{
// },[]);
  return `
  <div class="main-container">
  <div class="aside">
  <div class="logo">
      <a href="#"><span>Q</span>uang </a>
  </div>
  <div class="nav-toggler">
      <span></span>
  </div>
  <ul class="nav">
      <li><a href="/" class="active"><i class="fa fa-home"></i> Home </a></li>
      <li><a href="#about"><i class="fa fa-user"></i> About </a></li>
      <li><a href="#service"><i class="fa fa-list"></i> Services </a></li>
      <li><a href="#portfolio"><i class="fa fa-briefcase"></i> Portfolio </a></li>
      <li><a href="#contact"><i class="fa fa-comments"></i> Contacts </a></li>
  </ul>
</div>
<div class="main-content">
<!-- === Home section start -->
<section class="home section " id="home">
    <div class="container">
        <div class="row">
            <div class="home-info">
                <h3 class="hello">Xin chào tôi tên là <span class="name">Nguyễn Văn Quang</span> </h3>
                <h3 class="my-profession">I'm a <span class="typing" id="typing"></span> </h3>
                <p>I'm a web designer with extensie experience for over 10 year , My experience is to create
                    and website design , graphic design ,and many more ....
                </p>
                <a href="#contact" class="btn hire-me">
                    hire me
                </a>

            </div>
            <div class="home-img padd-15">
                <img src="./images/hero.jpg" alt="">
            </div>
        </div>
    </div>
</section>
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
                
                <a href="/#/admin/profile/edit" class="btn padd-15">Edit profile</a>
                <div class="row">
                    <div class="personal-info padd-15">
                    <div class="row">
                    <div class="info-item padd-15">
                        <p> Birth Day : <span>${profile.birthday}</span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p> Age : <span>${profile.age}</span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p> Email : <span>${profile.email}</span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p> Phone : <span>${profile.phone} </span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p> Phone : <span>${profile.phone} </span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p> City : <span>${profile.city}</span></p>
                    </div>
                    <div class="info-item padd-15">
                        <p> School : <span>${profile.school}</span></p>
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
                <a href="/#/admin/posts/add" class="btn padd-15">Add New Posts</a>
                <a href="/#/admin/posts/list" class="btn padd-15">List Posts</a>
                <div class="row">
                    <div class="education">
                        <h3 class="title">
                            Education
                        </h3>
                        <div class="row">
                            <div class="timeline-box padd-15">
                                <div class="timeline shadow-dark padd-15">
                                    <!-- === timline item -->
                                    ${Post
                                        .map((Post) =>{
                                            if(Post.categories == 1) {
                                                return `
                                                <div class="timeline-item">
                                                <div class="circle-dot"></div>
                                            <h3 class="timeline-date">
                                                <i class="fa fa-calendar"></i> 2013 - 2015
                                                </h3>
                                                <h4 class="timeline-title">
                                                ${Post.title}
                                                </h4>
                                                <p class="timeline-text">
                                                ${Post.description}
                                                </p>
                                                </div>
                                                `
                                            }
                                        }).join('')}
                                        
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
                                    ${Post
                                        .map((Post) =>{
                                            if(Post.categories == 2){
                                                return `
                                                <div class="timeline-item">
                                            <div class="circle-dot"></div>
                                            <h3 class="timeline-date">
                                            <i class="fa fa-calendar"></i> 2013 - 2015
                                            </h3>
                                            <h4 class="timeline-title">
                                            ${Post.title}
                                            avd
                                            </h4>
                                            <p class="timeline-text">
                                            ${Post.description}
                                            </p>
                                            </div>
                                            `
                                        }
                                        }).join('')}

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
<!-- === Services section start -->
<section class="service section" id="service">
    <div class="container">
        <div class="row">
            <div class="section-title padd-15">
                <h2> Services </h2>
            </div>
        </div>
        <div class="row">
            <!--  === Service item start -->
            <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                        <i class="fa fa-mobile-alt"></i>
                    </div>
                    <h4>Web designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est odit nulla.

                    </p>
                </div>
            </div>
            <!--  === Service item end -->
            <!--  === Service item start -->
            <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                        <i class="fa fa-laptop-code"></i>
                    </div>
                    <h4>Web designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est odit nulla.

                    </p>
                </div>
            </div>
            <!--  === Service item end -->
            <!--  === Service item start -->
            <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                        <i class="fa fa-palette"></i>
                    </div>
                    <h4>Web designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est odit nulla.

                    </p>
                </div>
            </div>
            <!--  === Service item end -->
            <!--  === Service item start -->
            <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                        <i class="fa fa-code"></i>
                    </div>
                    <h4>Web designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est odit nulla.

                    </p>
                </div>
            </div>
            <!--  === Service item end -->
            <!--  === Service item start -->
            <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                        <i class="fa fa-search"></i>
                    </div>
                    <h4>Web designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est odit nulla.

                    </p>
                </div>
            </div>
            <!--  === Service item end -->
            <!--  === Service item start -->
            <div class="service-item padd-15">
                <div class="service-item-inner">
                    <div class="icon">
                        <i class="fa fa-bullhorn"></i>
                    </div>
                    <h4>Web designer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est odit nulla.
                        haizz
                    </p>
                </div>
            </div>
            <!--  === Service item end -->

        </div>
    </div>
</section>
<!-- === Services section end -->

<!-- === Portfolio section start -->
<section class="portfolio section" id="portfolio">
    <div class="container">
        <div class="row">
            <div class="section-title padd-15">
                <h2>Portfolio</h2>
            </div>
        </div>
        <a href="/#/admin/project/add"><button class="btn padd-15">Add New Project</button></a>
        <a href="/#/admin/project/list"><button class="btn padd-15">List Project</button></a>
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
<!-- === contacts section start -->
<section class="section contact" id="contact">
    <div class="container">
        <div class="row">
            <div class="section-title padd-15">
                <h2>Contact Me </h2>
            </div>
        </div>
        <h3 class="contact-title"> Have you any Question ?</h3>
        <h4 class="contact-sub-title">I'M AT YOUR SERVICES</h4>
        <div class="row">
            <!-- == contact item start -->
            <div class="contact-info-item padd-15">
                <div class="icon"><i class="fa fa-phone"></i></div>
                <h4>Gọi cho tôi </h4>
                <p>0981896360</p>
            </div>
            <!-- == contact item end -->
            <!-- == contact item start -->
            <div class="contact-info-item padd-15">
                <div class="icon"><i class="fa fa-map-marker-alt"></i></div>
                <h4>Office</h4>
                <p>Not Yet</p>
            </div>
            <!-- == contact item end -->
            <!-- == contact item start -->
            <div class="contact-info-item padd-15">
                <div class="icon"><i class="fa fa-envelope"></i></div>
                <h4>Email</h4>
                <p>Quagsulu1911@gmail.com</p>
            </div>
            <!-- == contact item end -->
            <!-- == contact item start -->
            <div class="contact-info-item padd-15">
                <div class="icon"><i class="fa fa-globe-europe"></i></div>
                <h4>website</h4>
                <p>quagsulu1911.com</p>
            </div>
            <!-- == contact item end -->
        </div>
        <h3 class="contact-title"> SEND ME AN EMAIL?</h3>
        <h4 class="contact-sub-title">I'M VERY RESPONSIVE TO MESSAGE</h4>
        <!-- === contact Form start -->
        <div class="row">
            <div class="contact-form padd-15">
                <div class="row">
                    <div class="form-item col-6 padd-15">
                        <div class="form-group">
                            <input type="text" class="form-control " placeholder="Name">
                        </div>
                    </div>
                    <div class="form-item col-6 padd-15">
                        <div class="form-group">
                            <input type="email" class="form-control " placeholder="Email">
                        </div>
                    </div>
                </div>
                <!-- col-12 -->
                <div class="row">
                    <div class="form-item col-12 padd-15">
                        <div class="form-group">
                            <input type="text" class="form-control " placeholder="Subject">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-item col-12 padd-15">
                        <div class="form-group">
                            <!-- <input type="texxt" class="form-control " placeholder="Subject"> -->
                            <textarea name="" class="form-control" cols="30" rows="10"
                                placeholder="Message"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-item col-12 padd-15">
                        <div class="form-group">
                            <button type="submit" class="btn"> Send Message</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <!-- === contact Form end -->
    </div>

</section>
<!-- === contacts section end -->
</div>
<!-- == Main content End -->
</div> 
<!-- == main end == --> 
<!-- === style switcher start  -->
<div class="style-switcher">
    <div class="style-switcher-toggler s-icon">
        <i class="fas fa-cog fa-spin"></i>
    </div>
    <div class="day-night s-icon">
        <i class="fas fa-moon"></i>
    </div>
    <h4>Theme Color</h4>
    <div class="colors">
        <span class="color-1" id="color-web" ></span>
        <span class="color-2" id="color-web" ></span>
        <span class="color-3" id="color-web" ></span>
        <span class="color-4" id="color-web" ></span>
        <span class="color-5" id="color-web" ></span>
    </div>
</div> 
<!-- === style switcher end  -->
  `
}

export default AdminPage