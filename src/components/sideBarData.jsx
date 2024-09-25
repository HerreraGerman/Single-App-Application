import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
    {
        title: "Home",
        path: "/home",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Proyects",
        path: "/myProyects",
        icons: <AiIcons.AiFillFolder />,
        cName: "nav-text",
    },
    {
        title: "Stories",
        path: "/myStories",
        icons: <AiIcons.AiFillFolder />,
        cName: "nav-text",
    },
    {
        title: "Settings",
        path: "/settings",
        icons: <AiIcons.AiFillSetting />,
        cName: "nav-text",
    },
];

export default SideBarData;