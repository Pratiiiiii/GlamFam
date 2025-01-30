import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              Discover the latest fashion trends with our curated collection of ethnic and modern wear.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/shop" className="hover:text-black">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-black">Best Sellers</Link></li>
              <li><Link to="/shop" className="hover:text-black">Sale</Link></li>
              <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive updates on new arrivals and special promotions.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-l focus:outline-none"
              />
              <button className="bg-black text-white px-6 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}