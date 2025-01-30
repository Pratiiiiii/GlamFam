import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Designer Tops',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant designer top perfect for any occasion. Made with premium quality fabric for comfort and style.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Blue'],
  },
  {
    id: 2,
    name: 'Designer Saree',
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
    description: 'Beautiful designer saree crafted with silk fabric and intricate embroidery work.',
    colors: ['Red', 'Blue', 'Green', 'Pink'],
  },
  {
    id: 3,
    name: 'Ethnic Dress',
    price: '₹2,999',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800',
    description: 'Stunning ethnic dress with traditional designs and modern silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 4,
    name: 'Silk Sherwani',
    price: '₹8,999',
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=800',
    description: 'Royal silk sherwani with detailed embroidery work, perfect for special occasions.',
    sizes: ['38', '40', '42', '44'],
    colors: ['Maroon', 'Navy', 'Black'],
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-800 mb-6">{product.price}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-4">Size</h3>
              <div className="flex gap-4">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className="w-12 h-12 border rounded-md flex items-center justify-center hover:border-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">Color</h3>
              <div className="flex gap-4">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className="px-4 py-2 border rounded-md hover:border-black"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="px-4 py-3 border rounded-md hover:border-black transition">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}