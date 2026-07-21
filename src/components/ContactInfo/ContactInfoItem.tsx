"use client";
import PropTypes from "prop-types";
import React from 'react';
import ContactIcon from './ContactIcon';

const ContactInfoItem = ({data}) => {
    return (
        <div className="contact-info">
            <div className="icon">
                <ContactIcon id={`contactsvg-${data.id}`} file={data.icon} />
            </div>
            <div className="info">
                <h4 className="title">{data.title}</h4>
                <span className="info-text" dangerouslySetInnerHTML={{__html: data.info}}/>
            </div>
        </div>
    )
}

ContactInfoItem.propTypes = {
    data: PropTypes.object
};

export default ContactInfoItem;
