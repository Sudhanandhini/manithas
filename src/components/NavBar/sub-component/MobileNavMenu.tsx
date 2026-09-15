"use client";
import React from 'react';
import ActiveLink from "@/src/components/ActiveLink";
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils";
import { SOLUTION_LINKS, WHAT_WE_DO } from "../navData";
import { usePageLinksMap, resolvePageHref } from "@/src/context/PageLinksContext";

const MobileNavMenu = () => {
    const pageLinksMap = usePageLinksMap();
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-toggle") ||
            target.classList.contains("menu-toggle")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <nav className="site-mobile-menu">
            <ul>
                <li className="has-children">
                    <ActiveLink href={"/service"}><span className="menu-text">What We Do</span></ActiveLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="fas fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        {WHAT_WE_DO.map((category) => {
                            const links = category.columns.flat();
                            const firstHref = links[0] ? resolvePageHref(pageLinksMap, links[0].key, links[0].href) : "#";
                            return (
                                <li className="has-children" key={category.label}>
                                    <ActiveLink href={firstHref}><span className="menu-text">{category.label}</span></ActiveLink>
                                    <span className="menu-toggle" onClick={onClickHandler}><i className="fas fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        {links.map((link) => (
                                            <li key={link.key ?? link.href}><ActiveLink href={resolvePageHref(pageLinksMap, link.key, link.href)}><span className="menu-text">{link.label}</span></ActiveLink></li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </li>
                <li className="has-children">
                    <ActiveLink href={"/solutions/alumni"}><span className="menu-text">Solution</span></ActiveLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="fas fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        {SOLUTION_LINKS.map((link) => (
                            <li key={link.href}><ActiveLink href={link.href}><span className="menu-text">{link.label}</span></ActiveLink></li>
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

export default MobileNavMenu;
