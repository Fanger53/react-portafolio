import React, { useState } from 'react';
import {
    FaHouseUser,
    FaBars,
    FaUserAstronaut,
    FaBriefcase,
    FaGithub,
    FaLinkedin
}from "react-icons/fa";
import {GiSkills} from 'react-icons/gi';
import {MdContactMail} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHouseUser/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAstronaut/>
        },
        {
            path:"/skills",
            name:"Skills",
            icon:<GiSkills/>
        },
        {
            path:"/projects",
            name:"Projects",
            icon:<FaBriefcase/>
        },
        {
            path: "/contact",
            name: "Contact",
            icon: <MdContactMail/>
        }
    ]

    return (
        <div style={{width: isOpen ? "200px" : "50px"}}  className="d-flex sidebar ">
           <div style={{width: isOpen ? "200px" : "50px"}} >
               <div className="top_section ">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo  text-white">
                      <a href="https://www.linkedin.com/in/david-castillo-r/" target='_blank' className='text-white'>
                        <FaLinkedin />
                      </a>
                      <a href="https://github.com/Fanger53" target='_blank' className='text-white'>
                        <FaGithub/>
                      </a>  
                   </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle} className='faBars'/>
                   </div>
               </div>
               <div className='icons__container'>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link " activeclassname="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link__text">{item.name}</div>
                        </NavLink>
                    ))
                }
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;