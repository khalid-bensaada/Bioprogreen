import ProductGallery from "../components/products/ProductGallery";
import ProductTabs from "../components/products/ProductTabs";
import ProductActions from "../components/products/ProductActions";
import RelatedProducts from "../components/products/RelatedProducts";
import Newsletter from "../components/home/Newsletter";

import arganOil from "../assets/images/products/argan-oil.jpg";
import essentialOils from "../assets/images/products/essential-oils.jpg";
import vegetableOils from "../assets/images/products/vegetable-oils.jpg";

const product = {
    id: 1,
    name: "Argan Oil",
    category: "Essential Oils",

    description:
        "Premium Moroccan Argan Oil carefully produced from selected kernels. Ideal for cosmetic formulations, skincare, haircare, and private label solutions.",

    benefits: [
        "100% Natural",
        "Rich in Vitamin E",
        "Cold Pressed",
        "Suitable for Skin & Hair",
        "Private Label Available",
    ],

    ingredients: [
        "Pure Argan Oil",
        "Natural Antioxidants",
    ],

    usage:
        "Apply directly to skin or hair, or use as an ingredient in cosmetic formulations.",

    images: [
        arganOil,
        essentialOils,
        vegetableOils,
    ],
};

function ProductDetails() {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-6">

                    <div className="grid gap-16 lg:grid-cols-2">

                        {/* Product Images */}

                        <ProductGallery
                            images={product.images}
                        />

                        {/* Product Information */}

                        <div>

                            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                                {product.category}
                            </span>

                            <h1 className="mt-6 text-5xl font-bold text-gray-900">
                                {product.name}
                            </h1>

                            <p className="mt-6 leading-8 text-gray-600">
                                {product.description}
                            </p>

                            <ProductActions
                                onViewDetails={() => { }}
                                onRequestQuote={() => { }}
                                showCatalog={true}
                            />

                        </div>

                    </div>

                    <ProductTabs
                        description={product.description}
                        benefits={product.benefits}
                        ingredients={product.ingredients}
                        usage={product.usage}
                    />

                </div>
            </section>

            <RelatedProducts
                currentProductId={product.id}
            />

            <Newsletter />
        </>
    );
}

export default ProductDetails;