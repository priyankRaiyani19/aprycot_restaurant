import React from "react";
import component from "../assets/sidebar/component";
import spacialpage from "../assets/sidebar/spacialpage";
import Shield from "../assets/sidebar/shild";
import User from "../assets/sidebar/user";
import Utilities from "../assets/sidebar/utilities";
import Component from "../assets/sidebar/component";
import Widgets from "../assets/sidebar/widgets";
import Dashboard from "../assets/sidebar/dashboard";
import Spacialpage from "../assets/sidebar/spacialpage";


export const sideBarLinks = [

    {
        title: "Home",
        links: [
            {
                id: 1,
                icon: <Dashboard />,
                name: "Dashboard",
                path: "/dashboard",
            },
        ]
    },
    {
        title: "Page",
        links: [
            {
                id: 2,
                icon: <Spacialpage/>,
                name: "SpacialPage",
                path: "/",
            },
            {
                id: 3,
                icon: <Shield/>,
                name: "Authentication",
                path: "/",
            },
            {
                id: 4,
                icon: <User fill={"black"} />,
                name: "Users",
                path: "/user",
            },

            {
                id: 5,
                icon: <Utilities/>,
                name: "Utilities",
                path: "/",
            }
        ]
    },
    {
        title: "Element",
        links: [
            {
                id: 6,
                icon: <Component/>,
                name: "components",
                path: "/",
            },
            {
                id: 7,
                icon: <Widgets/>,
                name: "widgets",
                path: "/",
            }
        ]
    }


]