"use client";
import React, { useState } from 'react'
import ActiveLink from "@/src/components/ActiveLink";

type MegaMenuLink = { label: string; href: string };
type MegaMenuCategory = { label: string; columns: MegaMenuLink[][] };

const APPLICATION_LINKS: MegaMenuLink[] = [
    { label: "Alumni", href: "/what-we-do/application/alumni" },
    { label: "eLibrary", href: "/what-we-do/application/elibrary" },
    { label: "Subscription", href: "/what-we-do/application/subscription" },
    { label: "Employee Records", href: "/what-we-do/application/employee-records" },
    { label: "Online Assessment Test", href: "/what-we-do/application/online-assessment-test" },
    { label: "Custom Web Application", href: "/what-we-do/application" },
];

const WHAT_WE_DO: MegaMenuCategory[] = [
    {
        label: "Application",
        columns: [APPLICATION_LINKS],
    },
    {
        label: "Web Development",
        columns: [
            [  { label: "React Development", href: "/what-we-do/web-development/react-development" },
                   { label: "HTML & CSS Development", href: "/what-we-do/web-development/html-css-development" },
                
                { label: "E-Commerce Development", href: "/what-we-do/web-development/e-commerce-development" },
                { label: "Custom Web Development", href: "/what-we-do/web-development/custom-web-development" },
              
             
                { label: "WooCommerce Development", href: "/what-we-do/web-development/woocommerce-development" },
                { label: "Shopify Development", href: "/what-we-do/web-development/shopify-development" },
                { label: "WordPress Development", href: "/what-we-do/web-development/wordpress-development" },
                { label: "Landing Page", href: "/what-we-do/web-development/landing-page" },
            ],
            [
              
                { label: "Website Maintenance", href: "/what-we-do/web-development/website-maintenance" },
                { label: "Website Redesign", href: "/what-we-do/web-development/website-redesign" },
                { label: "Responsive Web Design", href: "/what-we-do/web-development/responsive-web-design" },
            ],
        ],
    },
    {
        label: "Hosting & Maintenance",
        columns: [
            [
                { label: "Linux Hosting", href: "/hosting/linux-hosting" },
                { label: "Web Hosting", href: "/hosting/web-hosting" },
                { label: "Email Hosting", href: "/hosting/email-hosting" },
                { label: "Cloud & VPS Hosting", href: "/hosting/cloud-vps-hosting" },
            ],
        ],
    },
    {
        label: "Business E-Mail",
        columns: [
            [
                { label: "Microsoft 365", href: "/what-we-do/business-email/microsoft-365" },
                { label: "Google Workspace", href: "/what-we-do/business-email/google-workspace" },
                { label: "Web Email", href: "/what-we-do/business-email/web-email" },
            ],
        ],
    },
    {
        label: "Industry Solutions",
        columns: [
            [
                { label: "Tours and Travels", href: "/industry-solutions/tours-and-travels" },
                { label: "Hotel & Resort", href: "/industry-solutions/hotel-resort" },
                { label: "Healthcare", href: "/industry-solutions/healthcare" },
                { label: "Corporate", href: "/industry-solutions/corporate" },
                { label: "Education", href: "/industry-solutions/education" },
                { label: "Real Estate & Construction", href: "/industry-solutions/real-estate-construction" },
            ],
        ],
    },
];

const NavBar = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <nav className="site-main-menu">
            <ul>
                <li className="has-children" onMouseLeave={() => setActiveTab(0)}>
                    <ActiveLink href={"/service"}><span className="menu-text">What We Do</span></ActiveLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
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
                                                <ActiveLink href={link.href}><span className="menu-text">{link.label}</span></ActiveLink>
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
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
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
