// import Navigo from "navigo";
import { render, router } from "./lib";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/admin/admin";
import PostAdd from "./pages/admin/Post/PostAdd";
import PostList from "./pages/admin/Post/PostList";
import PostEdit from "./pages/admin/Post/PostEdit";
import ProFileEdit from "./pages/admin/profile/profileEdit";
import projectDetail from "./pages/projectDetail";
import projectAdd from "./pages/admin/project/projectAdd";
import ProjectList from "./pages/admin/project/projectList";
import projectEdit from "./pages/admin/project/projectEdit";
const app = document.querySelector("#app");
// app.innerHTML = HomePage();
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/service", () => render(ServicePage, app));
router.on("/portfolio", () => render(PortfolioPage, app));
router.on("/contact", () => render(ContactPage, app));
// admin routes
router.on("/admin", () => render(AdminPage, app));
router.on("/admin/profile/edit", () => render(ProFileEdit, app));

router.on("/admin/posts/add", () => render(PostAdd, app));
router.on("/admin/posts/list", () => render(PostList, app));
router.on("/admin/posts/:id/edit",({ data }) => render(() => PostEdit(data), app));
// project
router.on("/project/:id",({ data }) => render(() => projectDetail(data), app));
router.on("/admin/project/add", () => render(projectAdd, app));
router.on("/admin/project/list", () => render(ProjectList, app));
router.on("/admin/project/:id/edit",({ data }) => render(() => projectEdit(data), app));


router.resolve();














