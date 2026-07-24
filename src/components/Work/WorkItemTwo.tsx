"use client";
import PropTypes from "prop-types";
import React from 'react';
import Link from "next/link";

const WorkItemTwo = ({ data }) => {
    const href = data.pageLink || `/work-details/${data.id}`;
    return (
        <div className="work">
            <div className="thumbnail">
                <Link className="image" href={href}><img src={data.image} alt="work" /></Link>
            </div>
            <div className="info">
                <h3 className="title"><Link href={href}>{data.title}</Link></h3>
                <p className="desc">{data.excerpt}</p>
                <Link href={href}>View Project</Link>
            </div>
        </div>
    )
}

WorkItemTwo.propTypes = {
    data: PropTypes.object
};

export default WorkItemTwo;
