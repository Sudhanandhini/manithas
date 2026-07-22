"use client";
import React, { useEffect, useState } from 'react'
import ActiveLink from "@/src/components/ActiveLink";

type SolutionLink = { title: string; slug: string };
type MegaMenuLink = { label: string; href: string };
type MegaMenuCategory = { label: string; columns: MegaMenuLink[][] };

const WHAT_WE_DO: MegaMenuCategory[] = [
    {
        label: "Application",
        columns: [[{ label: "Application Development", href: "/what-we-do/application" }]],
    },
    {
        label: "Web Development",
        columns: [
            [
                { label: "WordPress Development", href: "/what-we-do/web-development/wordpress-development" },
                { label: "E-Commerce Development", href: "/what-we-do/web-development/e-commerce-development" },
                { label: "Custom Web Development", href: "/what-we-do/web-development/custom-web-development" },
                { label: "WooCommerce Development", href: "/what-we-do/web-development/woocommerce-development" },
                { label: "Landing Page", href: "/what-we-do/web-development/landing-page" },
            ],
            [
                { label: "CMS Web Development", href: "/what-we-do/web-development/cms-web-development" },
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
                { label: "Cloud & VPS Hosting", href: "/what-we-do/web-hosting" },
            ],
        ],
    },
    {
        label: "Business E-Mail",
        columns: [[{ label: "Business E-Mail", href: "/what-we-do/business-email" }]],
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
    const [solutions, setSolutions] = useState<SolutionLink[]>([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        fetch("/api/solutions")
            .then((res) => (res.ok ? res.json() : { solutions: [] }))
            .then((data) => setSolutions(data.solutions ?? []))
            .catch(() => {});
    }, []);

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
                    <ActiveLink href={"/solution"}><span className="menu-text">Solution</span></ActiveLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        {solutions.length > 0 ? (
                            solutions.map((s) => (
                                <li key={s.slug}>
                                    <ActiveLink href={`/solution-details/${s.slug}`}><span className="menu-text">{s.title}</span></ActiveLink>
                                </li>
                            ))
                        ) : (
                            <li><ActiveLink href={"/solution"}><span className="menu-text">View all</span></ActiveLink></li>
                        )}
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/about"}><span className="menu-text">Who We Are</span></ActiveLink>
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
