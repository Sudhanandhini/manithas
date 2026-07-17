import React from 'react';

const SidebarSearch = ({ defaultValue = "" }: { defaultValue?: string }) => {
    return (
        <div className="sidebar-widget-content">
            <div className="sidebar-widget-search">
                <form action="/blog-grid" method="GET">
                    <input type="text" name="q" placeholder="Search..." defaultValue={defaultValue} />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}

export default SidebarSearch;
