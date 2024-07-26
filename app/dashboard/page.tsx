// app/dashboard/page.tsx
import { FC } from 'react';

const Dashboard: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h1 className='text-center text-2xl md:text-4xl'>Welcome to your Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Sales Overview</h2>
        <p className="text-gray-600">Track your sales performance over time.</p>
        <div className="mt-4">
          <div className="h-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Inventory Status</h2>
        <p className="text-gray-600">Monitor your inventory levels and stock.</p>
        <div className="mt-4">
          <div className="h-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Recent Orders</h2>
        <p className="text-gray-600">Review your most recent orders and their statuses.</p>
        <div className="mt-4">
          <div className="h-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Supplier Management</h2>
        <p className="text-gray-600">Manage your suppliers and their contact information.</p>
        <div className="mt-4">
          <div className="h-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Purchase Orders</h2>
        <p className="text-gray-600">Create and track purchase orders.</p>
        <div className="mt-4">
          <div className="h-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Store Management</h2>
        <p className="text-gray-600">Manage your store locations and performance.</p>
        <div className="mt-4">
          <div className="h-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
