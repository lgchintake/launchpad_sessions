import { useState } from "react";
import { NavLink } from "react-bootstrap";
import clsx from 'clsx';

export const MenuComponent = () => {
    const [isLarge, setIsLarge] = useState(true);
  const menus = [
    {
      name: "Dashboard",
      link: "/",
      icon: "fa-solid fa-chart-line",
    },
    {
      name: "Computers",
      link: "/computers",
      icon: "fa-solid fa-computer",
    },
    {
      name: "Printers",
      link: "/printers",
      icon: "fa-solid fa-print",
    },
    {
      name: "Speakers",
      link: "/speakers",
      icon: "fa-solid fa-volume-high",
    },
    {
      name: "Headphones",
      link: "/headphones",
      icon: "fa-solid fa-headphones-simple",
    },
  ];

  return (
    <div className={clsx((isLarge ? 'col-sm-2' : 'col-sm-1'), 'menubar')}>
      <ul className="pt-2">
        {menus.map((menu) => {
          return (
            <NavLink href={menu.link} key={menu.name}>
              <li className={clsx("mb-2 p-2", (!isLarge && 'text-center'))}>
                <i className={menu.icon}></i> {isLarge && menu.name}
              </li>
            </NavLink>
          );
        })}
      </ul>
      <div className="menu-toggler">
        <div className="btn btn-success" onClick={()=>setIsLarge(prev=> !prev)}><i className={clsx(isLarge? "fa-solid fa-chevron-left" : "fa-solid fa-chevron-right")}></i></div>
      </div>
    </div>
  );
};
