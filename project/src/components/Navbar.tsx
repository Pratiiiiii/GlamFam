import { ShoppingBag, Menu, Search, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer" />
            <Link to="/" className="text-2xl font-semibold">GlamFam</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-black">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 cursor-pointer" />
            <Heart className="h-6 w-6 cursor-pointer" />
            <User className="h-6 w-6 cursor-pointer" />
            <ShoppingBag className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}