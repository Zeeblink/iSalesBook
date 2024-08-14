"use client";
import { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('All fields are required.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccessMessage('Thank you for your message! We will get back to you soon.');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
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
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-gray-600">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-600">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {errorMessage && <div className="text-red-600 mb-4 text-center">{errorMessage}</div>}
                            {successMessage && <div className="text-green-600 mb-4 text-center">{successMessage}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
