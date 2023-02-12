import { Link, Outlet } from "react-router-dom";
import  * as icons from "../../../assets";
import "./style.css";


const paths = [
 {
  menu: "Home",
  path: "/"
 },
 {
  menu: "Search",
  path: "search"
 },
 {
  menu: "Stories",
  path: "stories"
 },
 {
  menu: "Trending",
  path: "trending"
 },
 {
  menu: "User",
  path: "user"
 }
  
]

const ICONS = Object.values(icons);
const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <div className="bottom-menu-inner">
        {ICONS.map((Icon, index) => <Link to={paths[index].path} key={index}>
            <Icon />
        </Link>)}
      </div>
    </div>
  );
};

export default BottomMenu;
