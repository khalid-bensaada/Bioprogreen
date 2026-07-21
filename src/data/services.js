import privateLabel from "../assets/images/private-label/private-label.jpg";
import arganOil from "../assets/images/products/argan-oil.jpg";
import essentialOils from "../assets/images/products/essential-oils.jpg";
import vegetableOils from "../assets/images/products/vegetable-oils.jpg";
import cream from "../assets/images/products/cream.jpg";
import shampoo from "../assets/images/products/shampoo.jpg";

const services = [
    {
        id: 1,
        title: "Private Label Manufacturing",
        slug: "private-label",
        image: privateLabel,
        description:
            "Launch your own cosmetic brand with our complete private label manufacturing solutions.",
        features: [
            "Custom Branding",
            "Premium Packaging",
            "Low Minimum Order Quantity",
            "International Standards",
        ],
    },
    {
        id: 2,
        title: "Contract Manufacturing",
        slug: "contract-manufacturing",
        image: arganOil,
        description:
            "Reliable manufacturing services for cosmetic brands, wholesalers, and distributors worldwide.",
        features: [
            "Large Production Capacity",
            "Quality Assurance",
            "Flexible Production",
            "Competitive Pricing",
        ],
    },
    {
        id: 3,
        title: "Custom Formulation",
        slug: "custom-formulation",
        image: cream,
        description:
            "Develop unique cosmetic formulas tailored to your brand and target market.",
        features: [
            "R&D Support",
            "Natural Ingredients",
            "Product Testing",
            "Formula Optimization",
        ],
    },
    {
        id: 4,
        title: "Bulk & Wholesale Supply",
        slug: "bulk-wholesale",
        image: vegetableOils,
        description:
            "Supply premium Moroccan natural products in bulk quantities for international businesses.",
        features: [
            "Bulk Orders",
            "Wholesale Pricing",
            "Stable Supply Chain",
            "Worldwide Shipping",
        ],
    },
    {
        id: 5,
        title: "Export & International Shipping",
        slug: "export-shipping",
        image: essentialOils,
        description:
            "Efficient export solutions with complete documentation and worldwide delivery.",
        features: [
            "Export Documents",
            "Fast Logistics",
            "Global Distribution",
            "Customs Assistance",
        ],
    },
    {
        id: 6,
        title: "Packaging & Labeling",
        slug: "packaging-labeling",
        image: shampoo,
        description:
            "Professional packaging and labeling services that reflect your brand identity.",
        features: [
            "Bottle Selection",
            "Label Design",
            "Premium Packaging",
            "Ready-to-Sell Products",
        ],
    },
];

export default services;