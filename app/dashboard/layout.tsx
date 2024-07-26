// app/dashboard/layout.tsx
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* <header className="bg-white shadow-md">
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
      </header> */}

      <main className="container mx-auto p-6 flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 iSalesBook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
