"use client";
import React from 'react'
import ActiveLink from "@/src/components/ActiveLink";

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li className="has-children">
                    <ActiveLink href={"/"}><span className="menu-text">Homepage</span></ActiveLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><ActiveLink href={"/home-one"}><span className="menu-text">Home One</span></ActiveLink></li>
                        <li><ActiveLink href={"/home-two"}><span className="menu-text">Home Two</span></ActiveLink></li>
                        <li><ActiveLink href={"/home-three"}><span className="menu-text">Home Three</span></ActiveLink></li>
                    </ul>
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
                <li className="has-children">
                    <ActiveLink href={"/blog-grid"}><span className="menu-text">Blog</span></ActiveLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><ActiveLink href={"/blog-grid"}><span className="menu-text">Blog Grid</span></ActiveLink></li>
                        <li><ActiveLink href={"/blog-classic"}><span className="menu-text">Blog classic</span></ActiveLink></li>
                        <li><ActiveLink href={`/blog-details/1`}><span className="menu-text">Blog Details</span></ActiveLink></li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/contact"}><span className="menu-text">Contact Us</span></ActiveLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
