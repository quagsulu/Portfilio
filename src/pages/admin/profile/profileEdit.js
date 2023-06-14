
// import { useEffect, useState, router } from "../../../lib";

// const ProFileEdit1 = () => {
//   const [profile, setprofile] = useState([]);
//   // lấy ra thông tin pots để hiển thị form
//   useEffect(() => {
//     fetch(`http://localhost:3000/profile/1`)
//     .then((response) => response.json())
//     .then((data) => {
//       setprofile(data);
//     });
//   }, []);
  
//   useEffect(() => {
//     const formData = document.querySelector("#dataeditpost");
//     console.log(formData);
//     // if (!formData) return;
//     formData.addEventListener("submit", function (e) {
//           // chặn reload trang
//           e.preventDefault();
          
//           const formDataUpdate = {
//             name: document.querySelector('#name').value,
//             age: document.querySelector('#age').value,
//             phone: document.querySelector('#phone').value,
//             birthday: document.querySelector('#birthday').value,
//             city: document.querySelector('#city').value,
//             email: document.querySelector('#email').value,
//             school: document.querySelector('#school').value,                
//           };
//           fetch(`http://localhost:3000/profile/1`, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formDataUpdate),
//           }).then(() => {
//             console.log("Success");
//             alert("Bạn đã cập nhật sản phẩm thành công");
//           }).then(() => router.navigate("/#/admin"))
//         });
//         },[]);

//         return `
//         <div class="form-ma">
//         <form class="form-post shadow-dark" id="dataeditpost">
//         <div class="title-form-post">
//         <h2>Update ProFile</h2>
//         </div>
//         <div class="group-input">
//         <label for="name">Name</label> <br>
//         <input type="text" id="name" class="w-100pt" value="${profile.name}" required>
//         </div>
//           <div class="group-input">
//                     <label for="age">Age</label> <br>
//                     <input type="text" id="age" class="w-100pt" value="${profile.age}" required>
//                 </div>
//                 <div class="group-input">
//                 <label for="phone">Phone</label> <br>
//                 <input type="text" id="phone" class="w-100pt" value="${profile.phone}" required>
//                </div>
//                 <div class="group-input">
//                 <label for="birthday">birthday</label> <br>
//                 <input type="text" id="birthday" class="w-100pt" value="${profile.birthday}" required>
//               </div>
//               <div class="group-input">
//               <label for="city">City</label> <br>
//               <input type="text" id="city" class="w-100pt" value="${profile.city}" required>
//             </div>
//             <div class="group-input">
//             <label for="email">Email</label> <br>
//             <input type="text" id="email" class="w-100pt" value="${profile.email}" required>
//           </div>
//           <div class="group-input">
//           <label for="school">School</label> <br>
//           <input type="text" id="school" class="w-100pt" value="${profile.school}" required>
//         </div>
//              <button class="btn padd-15 w-100pt">Submit</button>
//       </form>
//   </div>
//     `
//   }
  
  // export default ProFileEdit


import { router,useEffect ,useState} from "../../../lib/index";
const ProFileEdit = () => {
    const [ProFile, setProFile] = useState([]);
            // lấy ra thông tin pots để hiển thị form
        useEffect(() => {
                fetch(`http://localhost:3000/profile/1`)
                    .then((response) => response.json())
                    .then((data) => {
                        setProFile(data);
                    });
            }, []);
    
    useEffect(() => {

        const formPostAdd = document.querySelector('#post');
        if (!formPostAdd) return;
        formPostAdd.addEventListener('submit', (e) => {
            e.preventDefault();
            const Post ={
                name: document.querySelector('#name').value,
                age: document.querySelector('#age').value,
                phone: document.querySelector('#phone').value,
                birthday: document.querySelector('#birthday').value,
                city: document.querySelector('#city').value,
                email: document.querySelector('#email').value,
                school: document.querySelector('#school').value,   

            }
            fetch(`http://localhost:3000/profile/1`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
            },
            body: JSON.stringify(Post)
        }).then(() => {
    alert("Cập nhật thành công");
        setTimeout(() => {
        router.navigate("/admin"); 
            },2000)
        })
        });
    })
  return `
  <div class="form-ma">
        <form class="form-post shadow-dark" id="post">
               <div class="title-form-post">
                 <h2>Update ProFile</h2>
               </div>
        <div class="group-input">
                <label for="name">Name </label> <br>
                <input type="text" name="name" id="name" class="w-100pt" value="${ProFile.name}" required>
        </div>
        <div class="group-input">
        <label for="age">Age </label> <br>
        <input type="text" age="age" id="age" class="w-100pt" value="${ProFile.age}" required>
        </div>
        <div class="group-input">
        <label for="phone">phone </label> <br>
        <input type="text" phone="phone" id="phone" class="w-100pt" value="${ProFile.phone}" required>
        </div>        
        <div class="group-input">
        <label for="birthday">Birthday </label> <br>
        <input type="text" birthday="birthday" id="birthday" class="w-100pt" value="${ProFile.birthday}" required>
        </div>
        <div class="group-input">
        <label for="city">City </label> <br>
        <input type="text" city="city" id="city" class="w-100pt" value="${ProFile.city}" required>
        </div>
        <div class="group-input">
        <label for="email">email </label> <br>
        <input type="text" email="email" id="email" class="w-100pt" value="${ProFile.email}" required>
        </div> 
        <div class="group-input">
        <label for="school">School </label> <br>
        <input type="text" school="school" id="school" class="w-100pt" value="${ProFile.school}" required>
        </div>
        <input type="submit" name="submit-new-post" value="Submit" class="padd-15 btn w-100pt w-100pt">
            <!-- <button type="submit" class="btn padd-15">Submit </button> -->
    </form>
</div>
  `
}

export default ProFileEdit;
