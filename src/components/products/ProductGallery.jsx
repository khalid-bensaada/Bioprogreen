import { useState } from "react";

function ProductGallery({ images = [] }) {
    const [selectedImage, setSelectedImage] = useState(
        images.length ? images[0] : null
    );

    if (!images.length) {
        return (
            <div className="flex h-[500px] items-center justify-center rounded-3xl border border-gray-200 bg-gray-100">
                <p className="text-gray-500">No image available</p>
            </div>
        );
    }

    return (
        <section className="space-y-6">

            {/* Main Image */}

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                <img
                    src={selectedImage}
                    alt="Product"
                    className="h-[500px] w-full object-cover transition duration-300"
                />

            </div>

            {/* Thumbnails */}

            <div className="grid grid-cols-4 gap-4 md:grid-cols-5">

                {images.map((image, index) => (

                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`overflow-hidden rounded-2xl border-2 transition ${
                            selectedImage === image
                                ? "border-[#5A7D2B]"
                                : "border-transparent hover:border-gray-300"
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-24 w-full object-cover"
                        />
                    </button>

                ))}

            </div>

        </section>
    );
}

export default ProductGallery;