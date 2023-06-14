import { useEffect,useState } from "../../../lib"

const PostList = () => {
    const [Post, setPost] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/posts`)
        .then((respone) => respone.json()).then((data) => setPost(data));

    },[]);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            // console.log(id);
            btn.addEventListener("click", function () {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`http://localhost:3000/posts/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    setPost(Post.filter((Post) => Post.id != id));
                });
            });
        }
    });
// console.log(Post);
    return `
    <div class="list-port">
    <div class="row">
        <div class="section-title padd-15">
            <h2>List Post</h2>
        </div>
    </div>
    <div class="row">
        <a href="/#/admin/posts/add"><button class="btn padd-15">Add New Posts</button></a>
        <table class="post-list">
            <thead>
                <tr>
                    <th style="width: 10%;">stt </th>
                    <th style="width: 25%;">Title </th>
                    <th style="width: 15%;">Categories </th>
                    <th style="width: 50%;">Description </th>
                </tr>
            </thead>
            <tbody>
            ${Post.map((Post,index)=>{
                return `
            <tr>
                <td>${index+1}</td>
                <td>${Post.title}</td>
                <td>${Post.categories}</td>
                <td>${Post.description}</td>
                <td>
                <a class="btn" href="/#/admin/posts/${Post.id}/edit">Sửa</a>
                <button class="btn btn-remove" id="btn-remove" data-id="${Post.id}">xóa</button>
                </td> 
            </tr>
                `
            }).join("")}
            </tbody>
        </table>
    </div>
</div>
    `
  }
  
  export default PostList