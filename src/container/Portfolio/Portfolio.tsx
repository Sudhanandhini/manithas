"use client"
import { useState } from 'react';
import Link from "next/link";
import ReactVivus from 'react-vivus';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import { WHAT_WE_DO_CATEGORIES } from '../../data/whatWeDo/categories';
import { usePageLinksMap, resolvePageHref } from '../../context/PageLinksContext';

const PREVIEW_LINKS = [
    WHAT_WE_DO_CATEGORIES[0].links[0],
    WHAT_WE_DO_CATEGORIES[1].links[0],
    WHAT_WE_DO_CATEGORIES[2].links[3],
    WHAT_WE_DO_CATEGORIES[3].links[0],
    WHAT_WE_DO_CATEGORIES[4].links[3],
    WHAT_WE_DO_CATEGORIES[0].links[4],
];

const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const pageLinksMap = usePageLinksMap();

    const activeCategory = activeIndex >= 0 ? WHAT_WE_DO_CATEGORIES[activeIndex] : null;
    const visibleLinks = activeCategory ? activeCategory.links : PREVIEW_LINKS;

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
                    {visibleLinks.map((link, key) => {
                        const svgId = (link.key ?? link.href).replace(/[^a-zA-Z0-9]/g, "-");
                        return (
                            <div key={link.key ?? link.href} className="col mb-6" data-aos="fade-up" data-aos-delay={100 * (key % 3)}>
                                <Link href={resolvePageHref(pageLinksMap, link.key, link.href)} className="icon-box box-border text-center d-block">
                                    <div className="icon icon-animated">
                                        <ReactVivus
                                            id={`whatwedo-svg-${svgId}`}
                                            option={{
                                                file: link.icon,
                                                animTimingFunction: 'EASE',
                                                type: 'oneByOne',
                                                delay: 80,
                                            }}
                                        />
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{link.label}</h3>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
