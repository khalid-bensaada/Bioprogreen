import BlogCard from "./BlogCard";

import arganOil from "../../assets/images/products/argan-oil.jpg";
import rhassoul from "../../assets/images/products/rhassoul-clay.jpg";
import essentialOils from "../../assets/images/products/essential-oils.jpg";
import roseWater from "../../assets/images/products/rose-water.jpg";
import blackSoap from "../../assets/images/products/black-soap.jpg";
import pricklyPear from "../../assets/images/products/prickly-pear-oil.jpg";


const blogPosts = [
    {
        id: 1,
        image: arganOil,
        category: "Natural Ingredients",
        title: "Benefits of Moroccan Argan Oil in Skincare",
        excerpt:
            "Learn why argan oil is one of the most valuable natural ingredients used in premium cosmetic products.",
        date: "July 2026",
    },
    {
        id: 2,
        image: rhassoul,
        category: "Beauty Trends",
        title: "Rhassoul Clay: The Moroccan Beauty Secret",
        excerpt:
            "Discover the traditional benefits of Moroccan rhassoul clay for skin and hair care.",
        date: "June 2026",
    },
    {
        id: 3,
        image: essentialOils,
        category: "Cosmetic Formulation",
        title: "How Essential Oils Improve Natural Cosmetics",
        excerpt:
            "Explore how essential oils are used to create effective and natural cosmetic formulas.",
        date: "June 2026",
    },
    {
        id: 4,
        image: roseWater,
        category: "Natural Ingredients",
        title: "Rose Water Applications in Beauty Products",
        excerpt:
            "A look at the uses of rose water in modern skincare formulations.",
        date: "May 2026",
    },
    {
        id: 5,
        image: blackSoap,
        category: "Moroccan Beauty",
        title: "The Story Behind Moroccan Black Soap",
        excerpt:
            "Discover the history and benefits of traditional Moroccan black soap.",
        date: "May 2026",
    },
    {
        id: 6,
        image: pricklyPear,
        category: "Innovation",
        title: "Prickly Pear Oil: A Premium Cosmetic Ingredient",
        excerpt:
            "Why prickly pear seed oil is becoming a popular ingredient in luxury skincare.",
        date: "April 2026",
    },
];


function BlogGrid() {

    return (
        <section className="py-20">

            <div className="container mx-auto px-6">


                {/* Header */}

                <div className="mb-14 text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Latest Articles
                    </span>


                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Explore Our Blog
                    </h2>


                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
                        Stay updated with insights about natural cosmetics,
                        ingredients, manufacturing, and beauty industry trends.
                    </p>

                </div>



                {/* Grid */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {blogPosts.map((post) => (

                        <BlogCard
                            key={post.id}
                            image={post.image}
                            title={post.title}
                            excerpt={post.excerpt}
                            category={post.category}
                            date={post.date}
                            onClick={() => console.log(post.title)}
                        />

                    ))}

                </div>


            </div>

        </section>
    );
}


export default BlogGrid;