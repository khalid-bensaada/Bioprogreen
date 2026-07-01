import ProductGrid from "../components/product/ProductGrid";
import SearchBar from "../components/product/SearchBar";
import CategoryFilter from "../components/product/CategoryFilter";

function Products() {
    return (
        <section className="bg-[#FAF8F2] min-h-screen py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold text-gray-900">
                        Our Products
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Discover premium Moroccan natural cosmetics.
                    </p>
                </div>

                <div className="mb-10 grid gap-4 md:grid-cols-2">
                    <SearchBar />
                    <CategoryFilter />
                </div>

                <ProductGrid />

            </div>
        </section>
    );
}

export default Products;