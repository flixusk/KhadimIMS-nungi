import React, { useState } from 'react';

const Sidebar = () => {

  const [isMyShopOpen, setIsMyShopOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-64 bg-zinc-900 text-white h-screen p-4">
      <div className="text-2xl font-bold mb-8">
        LOGO and Store
      </div>

      {/* Navigation*/}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a href="/" className="flex items-center p-2 hover:bg-zinc-700 rounded">
              <span>Home</span>
            </a>
          </li>

          {/*Dropdown */}
          <li>
            <button
              onClick={() => setIsMyShopOpen(!isMyShopOpen)}
              className="flex items-center justify-between w-full p-2 hover:bg-zinc-700 rounded"
            >
              <span>My Shop</span>
              <svg
                className={`w-4 h-4 transition-transform ${isMyShopOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMyShopOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <a href="product" className="flex items-center p-2 hover:bg-zinc-700 rounded">
                    <span>Products</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 hover:bg-zinc-700 rounded">
                    <span>Orders</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 hover:bg-zinc-700 rounded">
                    <span>Billing</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
            

          <li>
            <a href="#" className="flex items-center p-2 hover:bg-zinc-700 rounded">
              <span>Shop Management</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 hover:bg-zinc-700 rounded">
              <span>Analytics Report</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 hover:bg-zinc-700 rounded">
              <span>Inbox</span>
            </a>
          </li>
          <li>
            <a href="help" className="flex items-center p-2 hover:bg-zinc-700 rounded">
              <span>Help & Support</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;