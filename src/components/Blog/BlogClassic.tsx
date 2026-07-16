"use client";
import React from 'react';
import {slugify} from "../../utils"
import PropTypes from "prop-types";
import Link from "next/link";


const BlogClassic = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link href={`/category/${slugify(value)}`} key={i}>{value}{i !== data.categories.length - 1 && ","}</Link>
        )
    });

    return (
        <div className="blog-3 col">
            <div className="thumbnail">
                <Link href={`/blog-details/${data.id}`} className="image"><img src={`/${data.largeImage}`} alt="Blog Image" /></Link>
            </div>
            <div className="info">
                <ul className="meta">
                    <li><i className="fa fa-pencil-alt"></i>{data.author}</li>
                    <li><i className="far fa-calendar"></i>{data.date}</li>
                    <li><i className="fas fa-tags"></i>{cate}</li>
                    <li><i className="fas fa-comments"></i>4 Comments</li>
                </ul>
                <h3 className="title"><Link href={`/blog-details/${data.id}`}>{data.title}</Link></h3>
                <div className="desc">
                    <p>{data.excerpt}</p>
                </div>
                <Link href={`/blog-details/${data.id}`} className="btn btn-primary btn-hover-secondary mt-6">Read More</Link>
            </div>
        </div>
    )
}
BlogClassic.propTypes = {
    data: PropTypes.object
};
export default BlogClassic;
