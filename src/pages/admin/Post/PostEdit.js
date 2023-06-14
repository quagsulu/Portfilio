// import { useEffect, useState,router } from "../../../lib";

// const PostEdit = ({ id }) => {
//     const [Post, setPost] = useState([]);
//         // lấy ra thông tin pots để hiển thị form
//     useEffect(() => {
//             fetch(`http://localhost:3000/posts/${id}`)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     setPost(data);
//                 });
//         }, []);

//     useEffect(() => {
//         const formData = document.querySelector("#dataeditpost");
        
//         if (!formData) return;
//         formData.addEventListener("submit", function (e) {
//             // chặn reload trang
//             e.preventDefault(); 
//             const titleUdate =document.querySelector('#title').value;
//             console.log(titleUdate);
//             const formDataUpdate = {
//                 title: document.querySelector('#title').value,
//                 categories: document.querySelector('#categories').value,
//                 description: document.querySelector('#description').value,
//             };
//             fetch(`http://localhost:3000/posts/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formDataUpdate),
//             })
//             .then(() => {
//                 console.log("Success");
//                 alert("Bạn đã cập nhật sản phẩm thành công");
//             })
//             .then(() => {
//                 router.navigate("/#/admin");
//               });
//         });
//         },[]);

//     return `
//     <div class="form-ma">
//           <form class="form-post shadow-dark" id="dataeditpost">
//               <div class="title-form-post">
//                   <h2>Update Posts</h2>
//               </div>
//               <div class="group-input">
//                   <label for="title">Title </label> <br>
//                   <input type="text" id="title" class="w-100pt" value="${Post.title}">
//             </div>
//           <div class="group-input">
//               <label for="">Categories</label> <br>
//               <select class="categories" id="categories" value="${Post.categories}">
//                   <option value="1">Education</option>
//                   <option value="2">Experience</option>
//               </select>
//           </div>
//           <div class="group-input">
//               <label for="description">Description</label> <br>
//               <input type="text" id="description" class="w-100pt" value="${Post.description}" >
//           </div>
//           <!--  <input type="submit" value="Submit" class="padd-15 btn w-100pt w-100pt"> -->
//              <button type="submit" class="btn padd-15 w-100pt">Submit</button>
//       </form>
//   </div>
//     `
//   }
  
//   export default PostEdit
// import { router, useEffect ,} from "../../../lib";

import { router,useEffect ,useState} from "../../../lib/index";
const PostEdit = ({id}) => {
    const [Post, setPost] = useState([]);
            // lấy ra thông tin pots để hiển thị form
        useEffect(() => {
                fetch(`http://localhost:3000/posts/${id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setPost(data);
                    });
            }, []);
    
    useEffect(() => {

        const formPostAdd = document.querySelector('#post');
        if (!formPostAdd) return;
        formPostAdd.addEventListener('submit', (e) => {
            e.preventDefault();
            const Post ={
                title: document.querySelector('#title').value,
                categories: document.querySelector('#categories').value,
                description: document.querySelector('#description').value
            }
            fetch(`${import.meta.env.VITE_API_URI}/posts/${id}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
            },
            body: JSON.stringify(Post)
        }).then(() => {
    alert("Cập nhật thành công");
        setTimeout(() => {
        router.navigate("/admin/posts/list"); 
            },2000)
        })
        });
    })
  return `
  <div class="form-ma">
        <form class="form-post shadow-dark" id="post">
            <div class="title-form-post">
                <h2>Add New Posts</h2>
            </div>
            <div class="group-input">
                <label for="title">Title </label> <br>
                <input type="text" name="title" id="title" class="w-100pt" value="${Post.title}" required>
        </div>
        <div class="group-input">
            <label for="">Categories</label> <br>
            <select title="categories" class="categories" name="categories" id="categories" >
                <option value="1">Education</option>
                <option value="2">Experience</option>
            </select>
        </div>

        <div class="group-input">
            <label for="description">Description</label> <br>
            <input type="text" name="description" id="description" class="w-100pt" value="${Post.description}" required>
        </div>
        <input type="submit" name="submit-new-post" value="Submit" class="padd-15 btn w-100pt w-100pt">
            <!-- <button type="submit" class="btn padd-15">Submit </button> -->
    </form>
</div>
  `
}

export default PostEdit;
