import { router,useEffect} from "../../../lib/index";

const projectAdd = () => {

// async function SavePhoto(inp) 
// {
//     let user = { name:'john', age:34 };
//     let formData = new FormData();
//     let photo = inp.files[0];      
         
//     formData.append("photo", photo);
//     formData.append("user", JSON.stringify(user)); 
    
//     const ctrl = new AbortController()    // timeout
//     setTimeout(() => ctrl.abort(), 5000);
    
//     try {
//        let r = await fetch('/upload/image', 
//          {method: "POST", body: formData, signal: ctrl.signal}); 
//        console.log('HTTP response code:',r.status); 
//     } catch(e) {
//        console.log('Huston we have problem...:', e);
//     }
    
// }
 
useEffect(() => {
    const formPostAdd = document.querySelector('#post');
    if (!formPostAdd) return;
    formPostAdd.addEventListener('submit', (e) => {
        e.preventDefault();
            
            let photo = document.getElementById("image").files[0];
            let formData = new FormData();
            formData.append("photo", photo);
            fetch('./images/portfolio/', {method: "POST", body: formData}); 
            // console.log(document.getElementById("image").files[0].name); 
          const Image = "./images/portfolio/"+  document.querySelector('#image').files[0].name;
        //  console.log(Image);
        const Post ={
            title: document.querySelector('#title').value,
            description: document.querySelector('#description').value,
            image: Image,
            skills: document.querySelector('#skills').value,
            endDate: document.querySelector('#endDate').value,
            startDate: document.querySelector('#startDate').value,
            url: document.querySelector('#url').value,
            github: document.querySelector('#github').value,
            teamMembers: document.querySelector('#teamMembers').value,
        }
        fetch(`${import.meta.env.VITE_API_URI}/projects`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
        },
        body: JSON.stringify(Post)
    }).then(() => {
alert("thêm thành công");
    setTimeout(() => {
    // router.navigate("/admin/posts/list");  
        },2000)
    })
    });
})
return `
<div class="form-ma">
    <form class="form-post shadow-dark" id="post" method="post" enctype="multipart/form-data">
        <div class="title-form-post">
            <h2>Add New Posts</h2>
        </div>
        <div class="group-input">
            <label for="title">Title </label> <br>
            <input type="text" name="title" id="title" class="w-100pt" required>
        </div>
        <div class="group-input">
            <label for="description">Description </label> <br>
            <input type="text" name="description" id="description" class="w-100pt" required>
        </div>
        <div class="group-input">
        <label for="image">Image </label> <br>
        <input type="file" name="image" id="image" class="w-100pt" required>
        </div>
       <div class="group-input">
             <label for="skills">Skills </label> <br>
              <input type="text" name="skills" id="skills" class="w-100pt" required>
        </div>
        <div class="group-input">
        <label for="endDate">EndDate </label> <br>
         <input type="text" name="endDate" id="endDate" class="w-100pt" required>
        </div>
        <div class="group-input">
        <label for="startDate">UtartDate </label> <br>
         <input type="text" name="startDate" id="startDate" class="w-100pt" required>
        </div>
        <div class="group-input">
        <label for="url">Url </label> <br>
         <input type="text" name="url" id="url" class="w-100pt" required>
        </div>
        <div class="group-input">
        <label for="github">GitHub </label> <br>
         <input type="text" name="github" id="github" class="w-100pt" required>
        </div>
        <div class="group-input">
        <label for="teamMembers">TeamMembers </label> <br>
         <input type="text" name="teamMembers" id="teamMembers" class="w-100pt" required>
        </div>



    <input type="submit" name="submit-new-post" value="Submit" class="padd-15 btn w-100pt w-100pt">
        <!-- <button type="submit" class="btn padd-15">Submit </button> -->
</form>
</div>
`
}

export default projectAdd