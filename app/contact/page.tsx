
const page = () => {
    return (
        <>
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 lg:px-0">
                    <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>
                    <p className="mt-4 text-lg text-gray-600 text-center">We would love to hear from you!</p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                            <p className="text-gray-600 mb-4">Feel free to reach out to us through any of the following ways:</p>
                            <ul className="text-gray-600 space-y-2">
                                <li><strong>Phone:</strong> (+234) 812 961 7910</li>
                                <li><strong>Email:</strong> info@isalesbook.com</li>
                                <li><strong>Address:</strong> 14 Adam&apos;s Manuel Street sabo yaba lagos Nigeria</li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-600">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-600">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-600">Message</label>
                                    <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"></textarea>
                                </div>
                                <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default page