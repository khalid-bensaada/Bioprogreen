function ProductCard({ product }) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
            />

            <div className="p-6">

                <span className="text-sm text-green-700">
                    {product.category}
                </span>

                <h3 className="mt-2 text-2xl font-semibold">
                    {product.name}
                </h3>

                <p className="mt-3 text-xl font-bold text-green-700">
                    {product.price}
                </p>

                <button className="mt-6 w-full rounded-lg bg-green-700 py-3 text-white transition hover:bg-green-800">
                    View Product
                </button>

            </div>
        </div>
    );
}

export default ProductCard;