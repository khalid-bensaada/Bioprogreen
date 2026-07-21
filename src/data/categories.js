import essentialOils from "../assets/images/products/essential-oils.jpg";
import vegetableOils from "../assets/images/products/vegetable-oils.jpg";
import arganOil from "../assets/images/products/argan-oil.jpg";
import roseWater from "../assets/images/products/rose-water.jpg";
import blackSoap from "../assets/images/products/black-soap.jpg";
import rhassoulClay from "../assets/images/products/rhassoul-clay.jpg";
import cream from "../assets/images/products/cream.jpg";
import shampoo from "../assets/images/products/shampoo.jpg";

const categories = [
    {
        id: 1,
        title: "Essential Oils",
        description:
            "Premium essential oils extracted from carefully selected natural ingredients for cosmetic and wellness applications.",
        image: essentialOils,
        productCount: 12,
        slug: "essential-oils",
    },
    {
        id: 2,
        title: "Vegetable Oils",
        description:
            "High-quality vegetable oils suitable for skincare, haircare, and cosmetic manufacturing.",
        image: vegetableOils,
        productCount: 10,
        slug: "vegetable-oils",
    },
    {
        id: 3,
        title: "Argan Products",
        description:
            "Authentic Moroccan argan oil and premium argan-based cosmetic products.",
        image: arganOil,
        productCount: 8,
        slug: "argan-products",
    },
    {
        id: 4,
        title: "Floral Waters",
        description:
            "Natural floral waters produced with modern distillation techniques.",
        image: roseWater,
        productCount: 6,
        slug: "floral-waters",
    },
    {
        id: 5,
        title: "Black Soap",
        description:
            "Traditional Moroccan black soap for natural skincare and spa treatments.",
        image: blackSoap,
        productCount: 5,
        slug: "black-soap",
    },
    {
        id: 6,
        title: "Rhassoul Clay",
        description:
            "Premium natural Moroccan clay for facial, body, and hair care.",
        image: rhassoulClay,
        productCount: 4,
        slug: "rhassoul-clay",
    },
    {
        id: 7,
        title: "Skin Care",
        description:
            "Natural skincare products formulated to nourish and protect the skin.",
        image: cream,
        productCount: 9,
        slug: "skin-care",
    },
    {
        id: 8,
        title: "Hair Care",
        description:
            "Professional hair care solutions enriched with botanical ingredients.",
        image: shampoo,
        productCount: 7,
        slug: "hair-care",
    },
];

export default categories;