"use client";
import React from 'react'
import ActiveLink from "@/src/components/ActiveLink";

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li className="has-children">
                    <ActiveLink href={"/service"}><span className="menu-text">What We Do</span></ActiveLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><ActiveLink href={"/what-we-do/application"}><span className="menu-text">Application</span></ActiveLink></li>
                        <li><ActiveLink href={"/what-we-do/web-development"}><span className="menu-text">Web Development</span></ActiveLink></li>
                        <li><ActiveLink href={"/what-we-do/business-email"}><span className="menu-text">Business E-Mail</span></ActiveLink></li>
                        <li className="has-children">
                            <ActiveLink href={"/hosting/linux-hosting"}><span className="menu-text">Hosting</span></ActiveLink>
                            <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                            <ul className="sub-menu">
                                <li><ActiveLink href={"/hosting/linux-hosting"}><span className="menu-text">Linux Hosting</span></ActiveLink></li>
                                <li><ActiveLink href={"/hosting/web-hosting"}><span className="menu-text">Web Hosting</span></ActiveLink></li>
                                <li><ActiveLink href={"/hosting/email-hosting"}><span className="menu-text">Email Hosting</span></ActiveLink></li>
                                <li><ActiveLink href={"/what-we-do/web-hosting"}><span className="menu-text">Cloud &amp; VPS Hosting</span></ActiveLink></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="has-children">
                    <ActiveLink href={"/solutions/alumni"}><span className="menu-text">Solution</span></ActiveLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><ActiveLink href={"/solutions/alumni"}><span className="menu-text">Alumni</span></ActiveLink></li>
                        <li><ActiveLink href={"/solutions/library"}><span className="menu-text">Library</span></ActiveLink></li>
                        <li><ActiveLink href={"/solutions/membership"}><span className="menu-text">Membership</span></ActiveLink></li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/about"}><span className="menu-text">What We Are</span></ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/contact"}><span className="menu-text">Reach Us</span></ActiveLink>
                </li>
                <li className="has-children">
                    <ActiveLink href={"/work"}><span className="menu-text">Work</span></ActiveLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><ActiveLink href={"/work"}><span className="menu-text">Work</span></ActiveLink></li>
                        <li><ActiveLink href={`/work-details/1`}><span className="menu-text">Work Details</span></ActiveLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
