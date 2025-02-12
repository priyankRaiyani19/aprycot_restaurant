import {FaRadio, FaWallet} from "react-icons/fa6";
import {MdOutlineSecurity} from "react-icons/md";
import {HiMiniUserGroup} from "react-icons/hi2";
import {RiBookmark2Fill} from "react-icons/ri";
import React from "react";
import {BiCalendarStar} from "react-icons/bi";
import {ImWindows} from "react-icons/im";

export const sideBarLinks = [

    {
        title: "Home",
        links: [
            {
                id:1,
                icon: <ImWindows className={`w-[40px] h-[40px] text-black`}/>,
                name: "Dashboard",
                path: "/",
            },
        ]
    },
    {
        title: "Page",
        links: [
            {
                id:2,
                icon: <FaRadio className={`w-[40px] h-[40px] text-black`}/>,
                name: "SpacialPage",
                path: "/",
            },
            {
                id:3,
                icon: <MdOutlineSecurity className={`w-[40px] h-[40px] text-black`}/>,
                name: "Authentication",
                path: "/",
            },
            {
                id:4,
                icon: <HiMiniUserGroup className={`w-[40px] h-[40px] text-black`}/>,
                name: "Users",
                path: "/user",
            },

            {
                id:5,
                icon: <RiBookmark2Fill className={`w-[40px] h-[40px] text-black`}/>,
                name: "Utilities",
                path: "/",
            }
        ]
    },
    {
        title: "Element",
        links: [
            {
                id:6,
                icon: <FaWallet className={`w-[40px] h-[40px] text-black`}/>,
                name: "components",
                path: "/",
            },
            {
                id:7,
                icon: <BiCalendarStar className={`w-[40px] h-[40px] text-black`}/>,
                name: "SpacialPage",
                path: "/",
            }
        ]
    }


]