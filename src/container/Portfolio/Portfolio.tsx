"use client"
import { useState } from 'react';
import Link from "next/link";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import { WHAT_WE_DO_CATEGORIES } from '../../data/whatWeDo/categories';

const PREVIEW_LINKS = [
    { ...WHAT_WE_DO_CATEGORIES[0].links[0], icon: WHAT_WE_DO_CATEGORIES[0].icon },
    { ...WHAT_WE_DO_CATEGORIES[1].links[0], icon: WHAT_WE_DO_CATEGORIES[1].icon },
    { ...WHAT_WE_DO_CATEGORIES[2].links[3], icon: WHAT_WE_DO_CATEGORIES[2].icon },
    { ...WHAT_WE_DO_CATEGORIES[3].links[0], icon: WHAT_WE_DO_CATEGORIES[3].icon },
    { ...WHAT_WE_DO_CATEGORIES[4].links[3], icon: WHAT_WE_DO_CATEGORIES[4].icon },
    { ...WHAT_WE_DO_CATEGORIES[0].links[4], icon: WHAT_WE_DO_CATEGORIES[0].icon },
];

const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const activeCategory = activeIndex >= 0 ? WHAT_WE_DO_CATEGORIES[activeIndex] : null;
    const visibleLinks = activeCategory
        ? activeCategory.links.map((link) => ({ ...link, icon: activeCategory.icon }))
        : PREVIEW_LINKS;

    return (
        <div className="section section-padding ag-masonary-wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <SectionTitleTwo
                            subTitle="What We Do"
                            title="Explore Our Services"
                        />
                    </div>
                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
                        <div className="messonry-button text-lg-end text-start mb-lg-13 mb-md-13 mb-6">
                            <button
                                type="button"
                                className={activeIndex === -1 ? "is-checked" : ""}
                                onClick={() => setActiveIndex(-1)}
                            >
                                <span className="filter-text">All</span>
                            </button>
                            {WHAT_WE_DO_CATEGORIES.map((category, key) => (
                                <button
                                    type="button"
                                    key={category.label}
                                    className={activeIndex === key ? "is-checked" : ""}
                                    onClick={() => setActiveIndex(key)}
                                >
                                    <span className="filter-text">{category.shortLabel}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6">
                    {visibleLinks.map((link, key) => (
                        <div key={link.href} className="col mb-6" data-aos="fade-up" data-aos-delay={100 * (key % 3)}>
                            <Link href={link.href} className="icon-box box-border text-center d-block">
                                <div className="icon icon-animated">
                                    <i className={link.icon} style={{ fontSize: 32, color: "var(--clr-primary)" }}></i>
                                </div>
                                <div className="content">
                                    <h3 className="title">{link.label}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
