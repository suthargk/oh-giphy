import { Link, Outlet } from "react-router-dom";
import { menuIcons } from "../../../assets";
import "./style.css";

const paths = Object.keys(menuIcons).reduce((acc, icon) => {
  const path = {
    menu: icon,
    path: icon !== "HomeIcon" ? icon.toLowerCase().replace("icon", "") : "/",
  };
  return [...acc, path];
}, []);

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <div className="bottom-menu-inner">
        {paths.map(({ menu, path }, index) => {
          const Icon =  menuIcons[menu]
          return (
            <Link to={path} key={index}>
              <Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomMenu;
