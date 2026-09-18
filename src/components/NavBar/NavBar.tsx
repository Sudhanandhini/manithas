"use client";
import React, { useState } from 'react'
import ActiveLink from "@/src/components/ActiveLink";
import { SOLUTION_LINKS, WHAT_WE_DO } from "./navData";
import { usePageLinksMap, resolvePageHref } from "@/src/context/PageLinksContext";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const pageLinksMap = usePageLinksMap();

    return (
        <nav className="site-main-menu">
            <ul>
                <li className="has-children has-mega-menu-full" onMouseLeave={() => setActiveTab(0)}>
                    <ActiveLink style={{ color: 'white' }} href={"/services"}><span className="menu-text">What We Do</span></ActiveLink>
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
                                            <li key={link.key ?? link.href}>
                                                <ActiveLink  href={resolvePageHref(pageLinksMap, link.key, link.href)}>
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
                    <ActiveLink  style={{ color: 'white' }} href={"/solutions/alumni"}><span className="menu-text">Solution</span></ActiveLink>
                    <span className="menu-toggle"><i className="fas fa-angle-down"></i></span>
                    <ul className="sub-menu sub-menu-wrap">
                        {SOLUTION_LINKS.map((link) => (
                            <li key={link.href}>
                                <ActiveLink  href={link.href}><span className="menu-text">{link.label}</span></ActiveLink>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <ActiveLink style={{ color: 'white' }} href={"/about"}><span className="menu-text">Who We Are</span></ActiveLink>
                </li>
                <li>
                    <ActiveLink style={{ color: 'white' }} href={"/contact"}><span className="menu-text">Reach Us</span></ActiveLink>
                </li>
                <li>
                    <ActiveLink style={{ color: 'white' }} href={"/login"}><span className="menu-text">Ticket</span></ActiveLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
