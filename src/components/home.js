import { useEffect, useState } from "../lib";

const Home = () => {
    // const [Post, setPost] = useState([]);
    const [profile, setprofile] = useState([]);
    // useEffect(() =>{
    //     fetch(`${import.meta.env.VITE_API_URI}/posts`)
    //     .then((respone) => respone.json())
    //     .then((data) => setPost(data));
    // },[]);
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URI}/profile/1`)
        .then((respone) => respone.json())
        .then((data) => setprofile(data));
    },[]);

    return `
    <div class="main-content">
    <!-- === Home section start -->
    <section class="home section " id="home">
        <div class="container">
            <div class="row">
                <div class="home-info">
                    <h3 class="hello">Xin chào tôi tên là <span class="name">${profile.name}</span> </h3>
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
    `;
};
export default Home;