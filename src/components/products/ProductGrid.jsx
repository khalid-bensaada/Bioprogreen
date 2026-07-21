import ProductCard from "./ProductCard";
import products from "../../data/products";
import EmptyState from "../common/EmptyState";

function ProductGrid() {
    if (!products.length) {
        return (
            <EmptyState
                title="No Products Found"
                description="There are currently no products available."
            />
        );
    }

    return (
        <section>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        category={product.category}
                        description={product.description}
                        onViewDetails={() =>
                            console.log(`View Product ${product.id}`)
                        }
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductGrid;