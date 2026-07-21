function PageHeader({ title, description }) {
    return (
        <section className="bg-gray-50 py-20">

            <div className="container mx-auto px-6 text-center">

                <h1 className="text-5xl font-extrabold text-gray-900">
                    {title}
                </h1>


                {description && (
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        {description}
                    </p>
                )}

            </div>

        </section>
    );
}

export default PageHeader;