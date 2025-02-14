import React from "react";
import Shield from "../assets/sidebar/shild";
import User from "../assets/sidebar/user";
import Utilities from "../assets/sidebar/utilities";
import Component from "../assets/sidebar/component";
import Widgets from "../assets/sidebar/widgets";
import Dashboard from "../assets/sidebar/dashboard";
import Spacialpage from "../assets/sidebar/spacialpage";

import dashboard from "../assets/sidebar/Category.png"
import spacialpage from "../assets/sidebar/Game.png"
import user from "../assets/sidebar/3 User.png"
import shield from "../assets/sidebar/Shield Done.png"
import utilities from "../assets/sidebar/Bookmark.png"
import components from "../assets/sidebar/Wallet.png";
import widgets from "../assets/sidebar/Ticket Star.png";




export const sideBarLinks = [
    {
        title: "Home",
        links: [
            {
                id: 1,
                icon: <Dashboard fill={"#959895"}   />,
                icon2:dashboard,
                name: "Dashboard",
                path: "/dashboard",
            },
        ],
    },
    {
        title: "Page",
        links: [
            {
                id: 2,
                icon: <Spacialpage fill={"#959895"} />,
                icon2:spacialpage,
                name: "SpacialPage",
                path: "/success",
            },
            {
                id: 3,
                icon: <Shield fill={"#959895"} />,
                icon2:shield,
                name: "Authentication",
                path: "/signin",
            },
            {
                id: 4,
                icon: <User fill={"#959895"}  />,
                icon2:user,
                name: "Users",
                path: "/user",
                // Add dropdown subLinks for "Users"
                subLinks: [
                    { name: "User Profile", path: "/user", },
                    { name: "Edit User", path: "/dashboard",  },
                    { name: "User List", path: "/dashboard", },
                ],
            },
            {
                id: 5,
                icon: <Utilities fill={"#959895"}  />,
                icon2:utilities,
                name: "Utilities",
                path: "/signup",
            },
        ],
    },
    {
        title: "Element",
        links: [
            {
                id: 6,
                icon: <Component fill={"#959895"}  />,
                icon2:components,
                name: "components",
                path: "/maintenance",
            },
            {
                id: 7,
                icon: <Widgets fill={"#959895"}  />,
                icon2:widgets,
                name: "widgets",
                path: "/400",
            },
        ],
    },
];
