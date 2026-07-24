"use client";
import PropTypes from "prop-types";
import React, { useState } from 'react';
import Link from "next/link";
import QuoteModal from "../QuoteModal/QuoteModal";

const FooterLinkItem = ({data}) => {
    const [helpDeskOpen, setHelpDeskOpen] = useState(false);

    return (
        <div className="footer-widget">
            <h4 className="footer-widget-title">{data.title}</h4>
            <div className="footer-widget-content">
                <ul>
                    {data.list.map((single,key) =>(
                        <li key={key}>
                            {single.text === "Help Desk" ? (
                                <a href="#" onClick={(e) => { e.preventDefault(); setHelpDeskOpen(true); }}>
                                    {single.text} {single?.badge && <span className="ft-badge">{single.badge}</span>}
                                </a>
                            ) : (
                                <Link href={single.url}>{single.text} {single?.badge && <span className="ft-badge">{single.badge}</span>} </Link>
                            )}
                        </li>
                    ))}

                </ul>
            </div>
            <QuoteModal
                show={helpDeskOpen}
                onClose={() => setHelpDeskOpen(false)}
                title="Help Desk"
                description="Need help with something? Send us the details and our support team will get back to you."
            />
        </div>
    )
}

FooterLinkItem.propTypes = {
    data: PropTypes.object
};

export default FooterLinkItem;
