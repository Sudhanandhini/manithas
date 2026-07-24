"use client";
import React from 'react';
import PropTypes from "prop-types";
import Link from "next/link";

const WorkItem = ({ portfolio }) => {
    const href = portfolio.pageLink || `/work-details/${portfolio.id}`;
    return (
        <div className="single-portfolio">
            <div className="thumbnail">
                <img className="img-fluid" src={portfolio.homeImage} alt="Portfolio-01"/>
            </div>
            <div className="content">
                <h5 className="title"><Link href={href}>{`${portfolio.title.slice(0, 22)}...`} <img src={"/images/icons/arrow-up-right.svg"} alt=""/></Link></h5>
            </div>
        </div>
    )
}

WorkItem.propTypes = {
    portfolio: PropTypes.object
};

export default WorkItem;
