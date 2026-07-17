import {slugify} from "../../utils";
import Link from "next/link";

const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });

const BlogDetails = ({ data }) => {
    const categoryList = (data.categories ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
    const cate = categoryList.map((value, i) => {
        return (
            <Link href={`/category/${slugify(value)}`} key={i}>{value}{i !== categoryList.length - 1 && ","}</Link>
        )

    });
    return (
        <div className="blog-3 blog-details col" data-aos="fade-up">
            <div className="thumbnail">
                <img className="w-100" src={data.largeImage || data.image || "/images/blog/770/blog-1.jpg"} alt={data.title} />
            </div>
            <div className="info">
                <h3 className="title">{data.title}</h3>
                <div className="desc" dangerouslySetInnerHTML={{__html: data.content}} />
                <ul className="meta mb-0 mt-12">
                    <li><i className="fa fa-pencil-alt"></i>{data.author}</li>
                    <li><i className="far fa-calendar"></i>{formatDate(data.publishedAt)}</li>
                    {categoryList.length > 0 && <li><i className="fas fa-tags"></i>{cate}</li>}
                    <li className="media"><Link href={"/"}><i className="fas fa-share-alt"></i>Share this post</Link>
                        <div className="list">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-tumblr-square"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogDetails
