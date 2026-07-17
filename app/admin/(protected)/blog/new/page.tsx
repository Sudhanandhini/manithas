import BlogTabs from "../BlogTabs";
import NewBlogForm from "./NewBlogForm";

export default function AdminNewBlogPage() {
    return (
        <>
            <BlogTabs />
            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Add a blog post</h2>
                <NewBlogForm />
            </div>
        </>
    );
}
