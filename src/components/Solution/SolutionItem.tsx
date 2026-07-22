import Link from "next/link";
import type { Solution } from "@prisma/client";

const SolutionItem = ({ data }: { data: Solution }) => {
    const image = data.image || "/images/blog/370/blog-1.jpg";
    return (
        <div className="work">
            <div className="thumbnail">
                <Link className="image" href={`/solution-details/${data.slug}`}>
                    <img src={image} alt={data.title} />
                </Link>
            </div>
            <div className="info">
                <h3 className="title">
                    <Link href={`/solution-details/${data.slug}`}>{data.title}</Link>
                </h3>
                <p className="desc">{data.excerpt}</p>
                <Link href={`/solution-details/${data.slug}`}>View Solution</Link>
            </div>
        </div>
    );
};

export default SolutionItem;
