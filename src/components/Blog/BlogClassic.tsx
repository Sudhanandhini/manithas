import {slugify} from "../../utils"
import Link from "next/link";

const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });

const BlogClassic = ({ data }) => {
    const slug = data.slug ?? data.id;
    const categoryList = Array.isArray(data.categories)
        ? data.categories
        : (data.categories ?? "").split(",").map((value) => value.trim()).filter(Boolean);
    const cate = categoryList.map((value, i) => {
        return (
            <Link href={`/category/${slugify(value)}`} key={i}>{value}{i !== categoryList.length - 1 && ","}</Link>
        )
    });
    const image = data.largeImage
        ? (data.largeImage.startsWith("/") || data.largeImage.startsWith("http") ? data.largeImage : `/${data.largeImage}`)
        : "/images/blog/770/blog-1.jpg";

    return (
        <div className="blog-3 col">
            <div className="thumbnail">
                <Link href={`/blog-details/${slug}`} className="image"><img src={image} alt={data.title} /></Link>
            </div>
            <div className="info">
                <ul className="meta">
                    <li><i className="fa fa-pencil-alt"></i>{data.author}</li>
                    <li><i className="far fa-calendar"></i>{data.publishedAt ? formatDate(data.publishedAt) : data.date}</li>
                    {categoryList.length > 0 && <li><i className="fas fa-tags"></i>{cate}</li>}
                </ul>
                <h3 className="title"><Link href={`/blog-details/${slug}`}>{data.title}</Link></h3>
                <div className="desc">
                    <p>{data.excerpt}</p>
                </div>
                <Link href={`/blog-details/${slug}`} className="btn btn-primary btn-hover-secondary mt-6">Read More</Link>
            </div>
        </div>
    )
}
export default BlogClassic;
