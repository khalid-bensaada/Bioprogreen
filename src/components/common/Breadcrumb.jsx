import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Breadcrumb({ items = [] }) {
    return (
        <div className="container mx-auto px-6 py-6">

            <nav className="flex items-center gap-2 text-sm text-gray-500">

                {items.map((item, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-2"
                    >

                        {item.link ? (
                            <Link
                                to={item.link}
                                className="transition hover:text-[#5A7D2B]"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <span className="font-medium text-gray-900">
                                {item.name}
                            </span>
                        )}


                        {index !== items.length - 1 && (
                            <ChevronRight size={16}/>
                        )}

                    </div>

                ))}

            </nav>

        </div>
    );
}

export default Breadcrumb;