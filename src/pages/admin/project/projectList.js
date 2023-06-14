import { useEffect,useState } from "../../../lib"

const ProjectList = () => {
    const [project, setproject] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/projects`)
        .then((respone) => respone.json()).then((data) => setproject(data));

    },[]);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            // console.log(id);
            btn.addEventListener("click", function () {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    setproject(project.filter((project) => project.id != id));
                });
            });
        }
    });
// console.log(project);
    return `
    <div class="list-port">
    <div class="row">
        <div class="section-title padd-15">
            <h2>List project</h2>
        </div>
    </div>
    <div class="row">
        <a href="/#/admin/projects/add"><button class="btn padd-15">Add New projects</button></a>
        <table class="post-list">
            <thead>
                <tr>
                    <th>stt </th>
                    <th>Title </th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>skills</th>
                    <th>endDate</th>
                    <th>startDate</th>
                    <th>url</th>
                    <th>github</th>
                    <th>teamMembers</th>
                </tr>
            </thead>
            <tbody>
            ${project.map((project,index)=>{
                return `
            <tr>
                <td>${index+1}</td>
                <td>${project.title}</td>
                <td>${project.description}</td>
                <td>${project.image}</td>
                <td>${project.skills}</td>
                <td>${project.endDate}</td>
                <td>${project.startDate}</td>
                <td>${project.url}</td>
                <td>${project.github}</td>
                <td>${project.teamMembers}</td>
                <td>
                <a class="btn" href="/#/admin/projects/${project.id}/edit">Sửa</a>
                <button class="btn btn-remove" id="btn-remove" data-id="${project.id}">xóa</button>
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
  
  export default ProjectList