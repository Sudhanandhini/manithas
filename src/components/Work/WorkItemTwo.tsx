"use client";
import PropTypes from "prop-types";
import React from 'react';
import Link from "next/link";
import { usePageLinksMap, resolvePageHref } from "../../context/PageLinksContext";

const WorkItemTwo = ({ data }) => {
    const pageLinksMap = usePageLinksMap();
    const fallbackHref = data.pageLink || `/work-details/${data.id}`;
    const href = resolvePageHref(pageLinksMap, data.pageLinkKey, fallbackHref);
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
