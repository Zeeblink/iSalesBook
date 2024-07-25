import { FC } from 'react';

const Dashboard: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-6">
          <div className="text-2xl font-bold text-orange-600">iSalesBook</div>
          <nav className="space-x-6 hidden md:flex">
            <a href="/dashboard" className="text-gray-700 hover:text-orange-600">Dashboard</a>
            <a href="/profile" className="text-gray-700 hover:text-orange-600">Profile</a>
            <a href="/settings" className="text-gray-700 hover:text-orange-600">Settings</a>
          </nav>
          <a href="/logout" className="bg-orange-600 text-white px-4 py-2 rounded-md hidden md:block">Logout</a>
          <button id="menu-btn" className="md:hidden block text-orange-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a href="/dashboard" className="text-gray-700 hover:text-orange-600">Dashboard</a>
            <a href="/profile" className="text-gray-700 hover:text-orange-600">Profile</a>
            <a href="/settings" className="text-gray-700 hover:text-orange-600">Settings</a>
            <a href="/logout" className="bg-orange-600 text-white px-4 py-2 rounded-md">Logout</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 iSalesBook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
