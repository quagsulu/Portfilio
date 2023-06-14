import { useState,useEffect,router } from "../lib";
const projectDetail = ({id}) => {
    const [project, setproject] = useState([]);
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URI}/projects/${id}`)
        .then((respone) => respone.json())
        .then((data) => setproject(data));
    },[]);
  return `
  <div class="project-detail shadow-dark">
  <div class="title-project">
      <h2>Project Detail</h2>
  </div>
  <div class="content-project">
      <div class="img">
          <img src="${project.image}" alt="">
      </div>
      <div class="content-detail">
          <div class="group-content">
              <p>Tên : <span>${project.title}</span></p>
          </div>
          <div class="group-content">
              <p>Mô tả  : <span>${project.description}</span></p>
          </div>
          <div class="group-content">
              <p>Ngôn ngữ sử dụng : <span>${project.skills}</span></p>
          </div>
          <div class="group-content">
              <p>Thành viên trong nhóm : <span>${project.teamMembers}</span></p>
          </div>
          <div class="group-content">
              <p>Thời gian bắt đầu : <span>${project.startDate}</span></p>
          </div>
          <div class="group-content">
              <p>Thời gian hoàn thành : <span>${project.endDate}</span></p>
          </div>
          <div class="group-content">
              <p>Link website : <span><a href="${project.url}">${project.url}</a></span></p>
          </div>
          <div class="group-content">
              <p>Link GitHub : <span><a href="${project.github}">${project.github}</a></span></p>
          </div>
      </div>
  </div>
</div>
  `;
}

export default projectDetail