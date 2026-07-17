import BlogItem from '../../components/Blog/BlogItem';
import type { BlogPost } from "@prisma/client";

const PageBlog = ({ posts, emptyMessage }: { posts: BlogPost[]; emptyMessage?: string }) => {
    return (
        <div className="section section-padding fix">
            <div className="container">

                {posts.length === 0 ? (
                    <p>{emptyMessage ?? "No blog posts yet. Check back soon."}</p>
                ) : (
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                        {posts.map((post) => (
                            <div key={post.id} className="col mb-6" data-aos="fade-up">
                                <BlogItem data={post} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default PageBlog;
