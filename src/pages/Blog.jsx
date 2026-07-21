import BlogHero from "../components/blog/BlogHero";
import BlogCategories from "../components/blog/BlogCategories";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogGrid from "../components/blog/BlogGrid";
import Newsletter from "../components/home/Newsletter";

function Blog() {
    return (
        <>
            <BlogHero />

            <BlogCategories />

            <FeaturedPost />

            <BlogGrid />

            <Newsletter />
        </>
    );
}

export default Blog;