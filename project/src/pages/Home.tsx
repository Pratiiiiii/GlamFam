import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Designer Tops',
      price: '₹1,499',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      name: 'Designer Saree',
      price: '₹4,999',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      name: 'Ethnic Dress',
      price: '₹2,999',
      image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      name: 'Silk Sherwani',
      price: '₹8,999',
      image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[600px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=2000"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Festive Collection</h2>
            <p className="text-xl mb-8">Discover the latest trends in ethnic wear</p>
            <Link to="/shop" className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
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
    </div>
  );
}