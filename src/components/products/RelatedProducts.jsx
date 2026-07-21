import ProductCard from "./ProductCard";
import products from "../../data/products";

function RelatedProducts({ currentProductId }) {
    const relatedProducts = products
        .filter((product) => product.id !== currentProductId)
        .slice(0, 3);

    if (!relatedProducts.length) return null;

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                {/* Section Header */}

                <div className="mb-12 text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        You May Also Like
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Related Products
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
                        Discover more premium natural products from our
                        collection that may suit your business needs.
                    </p>

                </div>

                {/* Products */}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {relatedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            category={product.category}
                            description={product.description}
                            onViewDetails={() =>
                                console.log(product.id)
                            }
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default RelatedProducts;