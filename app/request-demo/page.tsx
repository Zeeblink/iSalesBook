"use client"
import { FC, useState } from 'react';

const RequestDemo: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      setErrorMessage('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Your request has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Request a Demo</h1>
        {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="company" className="label">
              <span className="label-text">Company</span>
            </label>
            <input
              type="text"
              id="company"
              className="input input-bordered w-full"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className="textarea textarea-bordered w-full"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-orange-600 text-white w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Request my Demo'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
