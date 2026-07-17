"use client"
import PropTypes from "prop-types";
import React from 'react';
import Link from "next/link";
import BlogDetails from '../../components/Blog/BlogDetails';
import SidebarWrap from '../../components/Sidebar/SidebarWrap';
import SidebarWidget from '../../components/Sidebar/SidebarWidget';
import SidebarBanner from '../../components/Sidebar/SidebarBanner';
import SidebarTitle from '../../components/Sidebar/SidebarTitle';
import SidebarSearch from '../../components/Sidebar/SidebarSearch';
import SidebarCategories from '../../components/Sidebar/SidebarCategories';
import SidebarPost from '../../components/Sidebar/SidebarPost';

const BlogDetailsContainer = ({data, popularPosts = [], relatedPosts = [], categories = []}) => {
    return (
        <div className="section section-padding fix">
            <div className="container">
                <div className="row mb-n10">

                    <div className="col-lg-8 col-12 order-lg-1 mb-10">
                        <div className="row row-cols-1 no-gutters">

                            <BlogDetails data={data} />
                            {/* <div className="entry-author">
                                <div className="author-info">
                                    <div className="author-avatar">
                                        <img src={"/images/author/blog-author.png"} alt="" />
                                    </div>
                                    <div className="author-description">
                                        <h6 className="author-name">Eloise Smith</h6>
                                        <span className="designation">CEO at Flow</span>
                                        <div className="author-biographical-info">
                                            She is a lawyer, podcaster, speaker, and writer. As an educational content director, she helps develop HasThemes  premium training products.
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {relatedPosts.length > 0 && (
                                <div className="blog-nav-links">
                                    <h4 className="title">Related Posts </h4>
                                    <div className="nav-list">
                                        {relatedPosts.map((post, i) => {
                                            const category = (post.categories ?? "").split(",")[0]?.trim();
                                            const image = post.image || post.largeImage || "/images/pagination/blog-pagination.jpg";
                                            return (
                                                <div className={`nav-item ${i === 0 ? "prev" : "next"}`} key={post.id}>
                                                    <div className="inner">
                                                        <Link href={`/blog-details/${post.slug}`}>
                                                            <div className="hover-bg has-thumbnail" style={{backgroundImage: `url(${image})`}}></div>
                                                            {category && <span className="cate">{category}</span>}
                                                            <h6>{post.title}</h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

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
                                <SidebarPost posts={popularPosts} />
                            </SidebarWidget>
                            <SidebarWidget>
                                <SidebarBanner />
                            </SidebarWidget>
                        </SidebarWrap>
                    </div>

                </div>
            </div>
        </div>
    )
}
BlogDetailsContainer.propTypes = {
    data: PropTypes.object
};

export default BlogDetailsContainer;
