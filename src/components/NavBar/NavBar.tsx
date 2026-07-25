"use client";
import React, { useState } from 'react'
import ActiveLink from "@/src/components/ActiveLink";
import { APPLICATION_LINKS, WHAT_WE_DO } from "./navData";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <nav className="site-main-menu">
            <ul>
                <li className="has-children has-mega-menu-full" onMouseLeave={() => setActiveTab(0)}>
                    <ActiveLink href={"/service"}><span className="menu-text">What We Do</span></ActiveLink>
                    <span className="menu-toggle"><i className="fas fa-angle-down"></i></span>
                    <ul className="mega-menu mega-menu-tabbed">
                        <li className="mega-menu-tabs-col">
                            <ul className="mega-menu-tabs">
                                {WHAT_WE_DO.map((category, i) => (
                                    <li
                                        key={category.label}
                                        className={i === activeTab ? "active" : ""}
                                        onMouseEnter={() => setActiveTab(i)}
                                    >
                                        <span>{category.label}</span>
                                        <i className="far fa-angle-right"></i>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="mega-menu-panel-col">
                            <div className="mega-menu-panel">
                                {WHAT_WE_DO[activeTab].columns.map((column, ci) => (
                                    <ul className="mega-menu-panel-column" key={ci}>
                                        {column.map((link) => (
                                            <li key={link.href}>
                                                <ActiveLink href={link.href}>
                                                    <span className="menu-text">{link.label}</span>
                                                    <span className="menu-desc">{link.description}</span>
                                                </ActiveLink>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="has-children">
                    <ActiveLink href={"/what-we-do/application/alumni"}><span className="menu-text">Solution</span></ActiveLink>
                    <span className="menu-toggle"><i className="fas fa-angle-down"></i></span>
                    <ul className="sub-menu sub-menu-wrap">
                        {APPLICATION_LINKS.map((link) => (
                            <li key={link.href}>
                                <ActiveLink href={link.href}><span className="menu-text">{link.label}</span></ActiveLink>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/about"}><span className="menu-text">Who We Are</span></ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/contact"}><span className="menu-text">Reach Us</span></ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/login"}><span className="menu-text">Ticket</span></ActiveLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
