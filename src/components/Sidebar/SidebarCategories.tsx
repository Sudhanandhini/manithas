"use client";
import React from 'react';
import {flatDeep, slugify, containsObject} from '../../utils';
import BlogClassicData from '../../data/blog/BlogClassic.json';
import Link from "next/link";

const SidebarCategories = ({ categories: categoriesProp = null }) => {
    let categories = categoriesProp;
    if (!categories) {
        const cats = BlogClassicData.map(item => {
            return item.categories;
        });
        let singleCatArray = flatDeep(cats);
        categories = [];
        singleCatArray.forEach(cat => {
            const obj = {
                title: cat.trim(),
                slug: slugify(cat),
                count: 1
            }
            const objIndex = containsObject(obj, categories);
            if(objIndex !== -1){
                const prevCount = categories[objIndex].count;
                categories[objIndex] = {
                    title: cat.trim(),
                    slug: slugify(cat),
                    count: prevCount + 1
                }
            } else {
                categories.push(obj);
            }
        })
    }

    if (categories.length === 0) {
        return null;
    }

    return (
        <div className="sidebar-widget-content">
            <ul className="sidebar-widget-cate-list">
                {categories.map(cat => {
                    return (
                        <li key={cat.slug}>
                            <Link href={`/category/${cat.slug}`}>
                                <span className="text">{cat.title}</span>
                                <span className="count">{cat.count}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



export default SidebarCategories;
