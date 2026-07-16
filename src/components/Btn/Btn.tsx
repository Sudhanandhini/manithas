"use client";
import React from 'react';
import PropTypes from "prop-types"
import Link from "next/link";


const Btn = (props) => {
    return (
        <React.Fragment>
            <Link href={"/"} className="btn btn-light btn-hover-primary">{props.name}</Link>
        </React.Fragment>
    )
}

Btn.propTypes = {
    name: PropTypes.string
}

export default Btn
