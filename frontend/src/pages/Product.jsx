import React from 'react';
import Sidebar from '../components/sidebar';
import { TfiFilter, TfiSearch, TfiCalendar, TfiLayers } from "react-icons/tfi";

const Product = () => {
  // Example data (replace with actual data from your backend)
  const totalProducts = 120;
  const stockProducts = 90;
  const outOfStockProducts = 30;
  const productSales = 250;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 m-5 p-5 mt-10">
        <div className="text-start mt-5">
          <h1 className="text-2xl font-semibold">PRODUCT LIST</h1>
          <h4 className="text-zinc-400">Here you can find all of your products</h4>
        </div>

        {/* Total Product Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-zinc-800">
            <h3 className="text-lg font-semibold text-gray-600">Total Product</h3>
            <p className="text-2xl font-bold mt-2">{totalProducts}</p>
            <p className="text-sm text-gray-500 mt-1">All products in your store</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-zinc-800">
            <h3 className="text-lg font-semibold text-gray-600">Stock Product</h3>
            <p className="text-2xl font-bold mt-2">{stockProducts}</p>
            <p className="text-sm text-gray-500 mt-1">Products currently in stock</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-zinc-800">
            <h3 className="text-lg font-semibold text-gray-600">Out of Stock</h3>
            <p className="text-2xl font-bold mt-2">{outOfStockProducts}</p>
            <p className="text-sm text-gray-500 mt-1">Products out of stock</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-zinc-800">
            <h3 className="text-lg font-semibold text-gray-600">Product Sales</h3>
            <p className="text-2xl font-bold mt-2">{productSales}</p>
            <p className="text-sm text-gray-500 mt-1">Total products sold</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border border-gray-300 rounded-lg p-2 space-y-2 sm:space-y-0">
  {/* Search Input */}
  <div className="w-full sm:w-auto">
    <div className="border border-gray-300 rounded-full p-2 flex items-center w-full sm:w-80">
      <TfiSearch className="mr-2" />
      <input
        type="text"
        placeholder="Search by name, Product id..."
        className="w-full outline-none bg-transparent px-1 rounded-full"
      />
    </div>
  </div>

  {/* Filters */}
  <div className="flex items-center space-x-3">
    <div className="border border-gray-300 rounded-md p-2 flex items-center">
      <TfiCalendar className="mr-2" />
      <h3>01 Jan, 2024 to 31 Dec, 2024</h3>
    </div>

    <div className="border border-gray-300 rounded-md p-2 flex items-center">
      <TfiLayers className="mr-2" />
      <a>All status</a>
    </div>

    <div className="p-2 flex items-center">
      <TfiFilter className="mr-2" />
      <a>More filter</a>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Product;