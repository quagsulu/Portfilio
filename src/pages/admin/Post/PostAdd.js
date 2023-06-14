// import { router, useEffect ,} from "../../../lib";
import { router,useEffect} from "../../../lib/index";
const PostAdd = () => {
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
            fetch(`${import.meta.env.VITE_API_URI}/posts`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
            },
            body: JSON.stringify(Post)
        }).then(() => {
    alert("thêm thành công");
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
                <input type="text" name="title" id="title" class="w-100pt" required>
        </div>
        <div class="group-input">
            <label for="">Categories</label> <br>
            <select title="categories" class="categories" name="categories" id="categories">
                <option value="1">Education</option>
                <option value="2">Experience</option>
            </select>
        </div>

        <div class="group-input">
            <label for="description">Description</label> <br>
            <textarea name="description" class="w-100pt" id="description" cols="30" rows="10" required></textarea>
        </div>
        <input type="submit" name="submit-new-post" value="Submit" class="padd-15 btn w-100pt w-100pt">
            <!-- <button type="submit" class="btn padd-15">Submit </button> -->
    </form>
</div>
  `
}

export default PostAdd;
