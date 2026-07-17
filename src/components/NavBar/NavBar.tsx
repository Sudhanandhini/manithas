"use client";
import React from 'react'
import ActiveLink from "@/src/components/ActiveLink";

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                    <ActiveLink href={"/"}><span className="menu-text">Home</span></ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/about"}><span className="menu-text">About Us</span></ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/service"}><span className="menu-text">Services</span></ActiveLink>
                </li>
                <li className="has-children">
                    <ActiveLink href={"/work"}><span className="menu-text">Work</span></ActiveLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><ActiveLink href={"/work"}><span className="menu-text">Work</span></ActiveLink></li>
                        <li><ActiveLink href={`/work-details/1`}><span className="menu-text">Work Details</span></ActiveLink></li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/blog-grid"}><span className="menu-text">Blog</span></ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/contact"}><span className="menu-text">Contact Us</span></ActiveLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
