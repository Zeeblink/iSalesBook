import { FC } from 'react';

const RequestDemo: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Request a Demo</h1>
        <form className="space-y-6">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full"
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
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-orange-600 text-white w-full"
          >
            Request my Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
