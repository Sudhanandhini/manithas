"use client";
import PropTypes from "prop-types";
import React from 'react';
import Link from "next/link";


const Logo = ({image}) => {
    return(
        <div className="header-logo">
            <Link href={"/"}>
                <img className="dark-logo" src={`/images/logo/logo.png`} alt="Agency Logo" />
            </Link>
        </div>
    )
}

Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
