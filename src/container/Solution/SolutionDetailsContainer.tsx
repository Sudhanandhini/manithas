import Link from "next/link";
import type { Solution } from "@prisma/client";

const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

// Blank lines the admin types in the content textarea would otherwise be
// collapsed by normal HTML whitespace rules - split on them so each
// paragraph gets its own spaced block, matching the Work Details layout.
const contentBlocks = (content: string): string[] =>
    content
        .split(/\n{2,}/)
        .map((block) => block.trim())
        .filter(Boolean);

const isHtml = (block: string) => /<[a-z][\s\S]*>/i.test(block);

const SolutionDetailsContainer = ({ data }: { data: Solution }) => {
    const categoryList = (data.categories ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
    const hasGallery = Boolean(data.galleryImageOne || data.galleryImageTwo || data.galleryImageThree);
    const hasSubContent = Boolean(data.subContentTitle || data.subContentText);

    return (
        <div className="section section-padding">
            <div className="container">
                <div className="row pt--100 pb--80">

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="work-left work-details" data-aos="fade-up">
                            <div className="portfolio-main-info">
                                <h2 className="title">About the <br /> project</h2>
                                <div className="work-details-list mt-12">

                                    <div className="details-list">
                                        <label>Date</label>
                                        <span>{formatDate(data.publishedAt)}</span>
                                    </div>

                                    {data.client && (
                                        <div className="details-list">
                                            <label>Client</label>
                                            <span>{data.client}</span>
                                        </div>
                                    )}

                                    {categoryList.length > 0 && (
                                        <div className="details-list">
                                            <label>Categories</label>
                                            <span>
                                                {categoryList.map((value, i) => (
                                                    <span className="d-inline" key={i}>
                                                        {value}
                                                        {i !== categoryList.length - 1 && " , "}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                    )}

                                    {data.awards && (
                                        <div className="details-list">
                                            <label>Awards</label>
                                            <span>{data.awards}</span>
                                        </div>
                                    )}

                                </div>
                                <div className="work-share pt--70 pt_md--40 pt_sm--40">
                                    <h6 className="heading heading-h6">SHARE</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 offset-lg-1 col-12">
                        <div className="work-left work-details mt-6">
                            <div className="work-main-info">
                                <div className="work-content">
                                    <h6 className="title" data-aos="fade-up">ABOUT THE PROJECT</h6>

                                    <div className="desc mt-8">
                                        {contentBlocks(data.content).map((block, i) => (
                                            <div
                                                key={i}
                                                className="content mb-5"
                                                data-aos="fade-up"
                                                dangerouslySetInnerHTML={{
                                                    __html: isHtml(block) ? block : block.replace(/\n/g, "<br/>"),
                                                }}
                                            />
                                        ))}

                                        {data.ctaLink && (
                                            <div className="work-btn">
                                                <Link className="btn btn-primary btn-hover-secondary" href={data.ctaLink}>
                                                    {data.ctaText || "Go to link"}
                                                </Link>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="custom-column-thumbnail mt-lg-14 mt-1" data-aos="fade-up">
                            <img className="w-100" src={data.largeImage || data.image || "/images/blog/770/blog-1.jpg"} alt={data.title} />
                        </div>
                    </div>
                </div>

                {hasSubContent && (
                    <div className="row mt-lg-20 mt-12">
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="digital-marketing" data-aos="fade-up">
                                <h3 className="heading heading-h3">{data.subContentTitle}</h3>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12 offset-lg-1">
                            <div className="digital-marketing mt-lg-0 mt-6" data-aos="fade-up">
                                <div className="inner">
                                    {contentBlocks(data.subContentText ?? "").map((block, i) => (
                                        <p
                                            key={i}
                                            dangerouslySetInnerHTML={{
                                                __html: isHtml(block) ? block : block.replace(/\n/g, "<br/>"),
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {hasGallery && (
                    <div className="custom-layout-gallery mt-lg-20 mt-12">
                        <div className="row">
                            {data.galleryImageOne && (
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="thumbnail" data-aos="fade-up">
                                        <img className="w-100" src={data.galleryImageOne} alt={data.title} />
                                    </div>
                                </div>
                            )}
                            {data.galleryImageTwo && (
                                <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-10">
                                    <div className="thumbnail" data-aos="fade-up">
                                        <img className="w-100" src={data.galleryImageTwo} alt={data.title} />
                                    </div>
                                </div>
                            )}
                            {data.galleryImageThree && (
                                <div className="col-lg-12 my-6">
                                    <div className="thumbnail" data-aos="fade-up">
                                        <img className="w-100" src={data.galleryImageThree} alt={data.title} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default SolutionDetailsContainer;
