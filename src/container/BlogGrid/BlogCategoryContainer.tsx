"use client"
import PropTypes from "prop-types";
import React from 'react';
import BlogClassicData from '../../data/blog/BlogClassic.json';
import BlogClassic from '../../components/Blog/BlogClassic';
import SidebarWrap from '../../components/Sidebar/SidebarWrap';
import SidebarWidget from '../../components/Sidebar/SidebarWidget';
import SidebarBanner from '../../components/Sidebar/SidebarBanner';
import SidebarTitle from '../../components/Sidebar/SidebarTitle';
import SidebarSearch from '../../components/Sidebar/SidebarSearch';
import SidebarCategories from '../../components/Sidebar/SidebarCategories';
import SidebarPost from '../../components/Sidebar/SidebarPost';
import SidebarTag from '../../components/Sidebar/SidebarTag';

const BlogCategoryContainer = ({data, categories = null, popularPosts = null}) => {

    return (
        <div className="section section-padding fix">
            <div className="container">
                <div className="row mb-n10">

                    <div className="col-lg-8 col-12 order-lg-1 mb-10">
                        <div className="row row-cols-1 no-gutters">

                        {data.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6">
                                    <BlogClassic data={single} key={key} />
                                </div>
                            );
                        })}



                        </div>
                    </div>

                    <div className="col-lg-4 col-12 order-lg-2 mb-10">
                        <SidebarWrap>
                            <SidebarWidget>
                                <SidebarSearch />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarTitle title="Categories" />
                                <SidebarCategories categories={categories} />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarTitle classOption="mb-2" title="Popular Posts" />
                                <SidebarPost posts={popularPosts ?? BlogClassicData.slice(0, 4)} />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarBanner />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarTitle title="Popular tags" />
                                <SidebarTag />
                            </SidebarWidget>
                        </SidebarWrap>
                    </div>

                </div>
            </div>
        </div>
    )
}

BlogCategoryContainer.propTypes = {
    data: PropTypes.array
};

export default BlogCategoryContainer;
