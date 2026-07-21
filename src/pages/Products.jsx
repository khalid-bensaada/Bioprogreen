import ProductsHero from "../components/products/ProductsHero";
import ProductFilters from "../components/products/ProductFilters";
import ProductGrid from "../components/products/ProductGrid";
import Pagination from "../components/common/Pagination";
import Newsletter from "../components/home/Newsletter";

function Products() {
    return (
        <>
            <ProductsHero />
            <ProductFilters />
            <ProductGrid />
            <Pagination />
            <Newsletter />
        </>
    );
}

export default Products;