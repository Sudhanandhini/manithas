"use client";
import PropTypes from "prop-types";
import React from 'react';
import Link from "next/link";

const Brand = ({ data }) => {
    return (
        <div className="brand">
            <Link href={"/"}>
                <img src={data.image} alt="logo image" />
            </Link>
        </div>
    )
}

Brand.propTypes = {
    data: PropTypes.object
}



export default Brand;
