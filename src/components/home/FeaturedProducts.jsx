import ProductCard from "../product/ProductCard";
import products from "../../data/products";

function FeaturedProducts() {
    return (
        <section className="bg-[#FAF8F2] py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold">
                        Featured Products
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Discover our best-selling natural cosmetic products.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedProducts;