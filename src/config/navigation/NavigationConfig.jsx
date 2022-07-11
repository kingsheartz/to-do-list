import { Strings } from "../../commons/strings/Strings";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import ToDoList from "../../pages/to-do-list/ToDoList";
import RouteConfig from "../routes/RouteConfig";

const NavigationConfig = [
  {
    title: Strings.home,
    path: RouteConfig.home,
    component: ToDoList
  },
  {
    title: Strings.about,
    path: RouteConfig.about,
    component: About
  },
  {
    title: Strings.contact,
    path: RouteConfig.contact,
    component: Contact
  },

]

export default NavigationConfig;