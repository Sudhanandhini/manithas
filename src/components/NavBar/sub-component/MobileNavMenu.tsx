"use client";
import React from 'react';
import ActiveLink from "@/src/components/ActiveLink";
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils";

const MobileNavMenu = () => {
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
                    <ActiveLink href={"/"}><span className="menu-text">Homepage</span></ActiveLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
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
                    <span className="menu-toggle" onClick={onClickHandler}><i className="far fa-angle-down"></i></span>
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

export default MobileNavMenu;
