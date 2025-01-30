import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'tops', name: 'Tops & Dresses' },
  { id: 'sarees', name: 'Sarees' },
  { id: 'ethnic', name: 'Ethnic Wear' },
  { id: 'mens', name: 'Mens Wear' },
];

const products = [
  {
    id: 1,
    name: 'Designer Tops',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
    category: 'tops'
  },
  {
    id: 2,
    name: 'Designer Saree',
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
    category: 'sarees'
  },
  {
    id: 3,
    name: 'Ethnic Dress',
    price: '₹2,999',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800',
    category: 'ethnic'
  },
  {
    id: 4,
    name: 'Silk Sherwani',
    price: '₹8,999',
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=800',
    category: 'mens'
  },
  // Add more products as needed
];

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 rounded-full border border-gray-300 hover:border-black transition"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="group">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 text-white p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                <button className="w-full bg-white text-black py-2 rounded">
                  View Details
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}