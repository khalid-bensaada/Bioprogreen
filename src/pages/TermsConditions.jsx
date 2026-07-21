import PageHeader from "../components/common/PageHeader";

function TermsConditions() {
    return (
        <>
            <PageHeader
                title="Terms & Conditions"
                description="Please read our terms and conditions carefully before using BioProGreen services."
            />

            <section className="py-20">
                <div className="container mx-auto max-w-5xl px-6">

                    <div className="space-y-10 rounded-3xl bg-white p-8 shadow-sm md:p-12">

                        {/* Introduction */}

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                1. Introduction
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                Welcome to BioProGreen. By accessing our website
                                and using our services, you agree to comply with
                                these terms and conditions.
                            </p>
                        </div>


                        {/* Services */}

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                2. Our Services
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                BioProGreen provides natural cosmetic products,
                                private label manufacturing, wholesale solutions,
                                and international export services.
                            </p>
                        </div>


                        {/* Orders */}

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                3. Orders & Quotations
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                All quotations are based on the information
                                provided by the customer. Orders are confirmed
                                only after agreement on specifications, pricing,
                                and delivery conditions.
                            </p>
                        </div>


                        {/* Products */}

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                4. Product Information
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                We make every effort to provide accurate product
                                information. However, colors, packaging, and
                                specifications may vary depending on production
                                requirements.
                            </p>
                        </div>


                        {/* Payment */}

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                5. Payment Terms
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                Payment conditions are agreed upon before order
                                confirmation and may vary depending on the
                                project and customer requirements.
                            </p>
                        </div>


                        {/* Shipping */}

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                6. Shipping & Delivery
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                Delivery times depend on order volume,
                                customization requirements, and destination
                                country.
                            </p>
                        </div>


                        {/* Privacy */}

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                7. Privacy
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                Customer information is handled securely and is
                                only used for communication, quotations, and
                                service improvement.
                            </p>
                        </div>


                        {/* Contact */}

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                8. Contact
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                For any questions regarding these terms,
                                please contact BioProGreen through our official
                                communication channels.
                            </p>
                        </div>


                    </div>

                </div>
            </section>
        </>
    );
}

export default TermsConditions;