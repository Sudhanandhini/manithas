import Link from "next/link";

const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });

const BlogItem = ({ data }) => {
    const slug = data.slug ?? data.id;
    const image = data.image || "/images/blog/370/blog-1.jpg";
    return (
        <div className="blog">
            <div className="thumbnail">
                <Link href={`/blog-details/${slug}`} className="image"><img src={image} alt={data.title} /></Link>
            </div>
            <div className="info">
                <ul className="meta">
                    <li><i className="far fa-calendar"></i>{data.publishedAt ? formatDate(data.publishedAt) : data.date}</li>
                </ul>
                <h3 className="title"><Link href={`/blog-details/${slug}`}>{data.title}</Link></h3>
                <Link href={`/blog-details/${slug}`} className="link"> <mark>Read More</mark> </Link>
            </div>
        </div>
    )
}

export default BlogItem
