import { Inbox } from "lucide-react";

function EmptyState({
    title = "No Data Found",
    description = "There is nothing to display."
}) {

    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">

                <Inbox
                    size={40}
                    className="text-gray-400"
                />

            </div>


            <h2 className="mt-6 text-2xl font-bold text-gray-900">
                {title}
            </h2>


            <p className="mt-3 text-gray-600">
                {description}
            </p>

        </div>
    );
}

export default EmptyState;