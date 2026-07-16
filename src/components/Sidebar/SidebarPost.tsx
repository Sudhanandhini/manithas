"use client";
import React from 'react';
import Link from "next/link";
import BlogClassicData from '../../data/blog/BlogClassic.json';

const SidebarPost = () => {
    return (
        <div className="sidebar-widget-content">
            <ul className="sidebar-widget-list-post">
                {BlogClassicData.slice(0, 4).map((value) => {
                    return(
                        <li key={value.id}>
                            <span className="cate">{value.categories.slice(0, 1)}</span>
                            <Link href={`/blog-details/${value.id}`}>{value.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



export default SidebarPost;
