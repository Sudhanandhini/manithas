"use client";
import PropTypes from "prop-types";
import React from 'react';
import Link from "next/link";

const WorkItemTwo = ({ data }) => {
    return (
        <div className="work">
            <div className="thumbnail">
                <Link className="image" href={`/work-details/${data.id}`}><img src={data.image} alt="work" /></Link>
            </div>
            <div className="info">
                <h3 className="title"><Link href={`/work-details/${data.id}`}>{data.title}</Link></h3>
                <p className="desc">{data.excerpt}</p>
                <Link href={`/work-details/${data.id}`}>View Project</Link>
            </div>
        </div>
    )
}

WorkItemTwo.propTypes = {
    data: PropTypes.object
};

export default WorkItemTwo;
