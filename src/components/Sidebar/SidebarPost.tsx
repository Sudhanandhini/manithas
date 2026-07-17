import Link from "next/link";

type PopularPost = {
    id: string | number;
    slug?: string;
    title: string;
    categories?: string | string[] | null;
};

const SidebarPost = ({ posts = [] }: { posts?: PopularPost[] }) => {
    if (posts.length === 0) {
        return null;
    }

    return (
        <div className="sidebar-widget-content">
            <ul className="sidebar-widget-list-post">
                {posts.map((post) => {
                    const category = Array.isArray(post.categories)
                        ? post.categories[0]
                        : (post.categories ?? "").split(",")[0]?.trim();
                    return(
                        <li key={post.id}>
                            {category && <span className="cate">{category}</span>}
                            <Link href={`/blog-details/${post.slug ?? post.id}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



export default SidebarPost;