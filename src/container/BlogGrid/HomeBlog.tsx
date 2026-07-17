import { prisma } from "@/lib/prisma";
import BlogItem from '../../components/Blog/BlogItem';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

const HomeBlog = async ({ SectionBgColor = "section section-padding-t90-b100" }: { SectionBgColor?: string }) => {
    const posts = await prisma.blogPost.findMany({
        where: { published: true },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take: 3,
    });

    if (posts.length === 0) {
        return null;
    }

    return (
        <div className={`section section-padding-t90-b100 ${SectionBgColor}`}>
            <div className="container">
                <SectionTitle
                    title="We are a full-service creative agency"
                    subTitle="Our team of designers, developers and creatives are perfectionists
                    who love what they do and love"
                />

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                        {posts.map((post) => (
                            <div key={post.id} className="col mb-6" data-aos="fade-up">
                                <BlogItem data={post} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default HomeBlog
