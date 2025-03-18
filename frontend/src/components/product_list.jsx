import React, { useState } from 'react';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fake data for demonstration
  const products = [
    {
      id: 1,
      productName: "Men's Casual Sneakers - Premium Edition with Extra Comfort",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg",
      productCode: "KHM-SNEAKER-BLK-7",
      price: "1928 INR",
      stock: 3000,
      status: "In Stock",
    },
    {
      id: 2,
      productName: "Women's Formal Heels - Elegant Design for Special Occasions",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-HEELS-RED-6",
      price: "69.99 INR",
      stock: 30,
      status: "In Stock",
    },
    {
      id: 3,
      productName: "Kids Sports Shoes - Lightweight and Durable for Active Kids",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SPORTS-BLU-3",
      price: "39.99 INR",
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 4,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },
    {
      id: 43131,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },
    {
      id: 4131,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },
    {
      id: 41313,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },
    {
      id: 431313,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },
    {
      id: 41313,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },
    {
      id: 41313,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },
    {
      id: 41313,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },
    {
      id: 41112,
      productName: "Unisex Sandals - Perfect for Summer and Beach Outings",
      image: "https://via.placeholder.com/100",
      productCode: "KHM-SANDALS-BRN-8",
      price: "29.99 INR",
      stock: 40,
      status: "In Stock",

      
    },

    
  ];

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 bg-gray-200 p-4 rounded-xl shadow-md font-medium text-gray-700">
        <div className='pl-4 text-start'>Product Name</div> {/* Wider column */}
        <div>Product Code</div>
        <div>Price</div>
        <div>Stock</div>
        <div>Status</div>
        <div>Action</div>
      </div>

      {/* Table Rows */}
      {products.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
        >
          {/* Product Name with Image */}
          <div className="flex items-center overflow-hidden">
            <img
              src={product.image}
              alt={product.productName}
              className="w-12 h-12 rounded-lg object-cover mr-3"
            />
            <span className="font-medium text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
              {product.productName}
            </span>
          </div>

          {/* Product Code */}
          <div className="flex items-center text-gray-700">{product.productCode}</div>

          {/* Price */}
          <div className="flex items-center font-semibold text-gray-800">{product.price}</div>

          {/* Stock */}
          <div className="flex items-center text-gray-700">{product.stock} units</div>

          {/* Status */}
          <div className="flex items-center">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.status === "In Stock"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.status}
            </span>
          </div>

          {/* Action (Details Button) */}
          <div className="flex items-center">
            <button
              onClick={() => handleDetailsClick(product)}
              className="border border-zinc-400  text-black px-4 py-2 rounded-lg hover:bg-zinc-300 transition-colors"
            >
              Details
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedProduct.productName}
            </h2>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-medium">Product Code:</span> {selectedProduct.productCode}</p>
              <p><span className="font-medium">Price:</span> {selectedProduct.price}</p>
              <p><span className="font-medium">Stock:</span> {selectedProduct.stock} units</p>
              <p><span className="font-medium">Status:</span> {selectedProduct.status}</p>
              <p><span className="font-medium">Category:</span> Casual</p>
              <p><span className="font-medium">Gender:</span> Men</p>
              <p><span className="font-medium">Size:</span> 7, 8, 9</p>
              <p><span className="font-medium">Color:</span> Black</p>
              <p><span className="font-medium">Brand:</span> Khadim's</p>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;