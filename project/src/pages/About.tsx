import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Elegance</h1>
        
        <div className="prose prose-lg">
          <p className="mb-6">
            Welcome to Elegance, your premier destination for contemporary Indian fashion. 
            Founded in 2024, we've been dedicated to bringing you the finest collection 
            of ethnic and modern wear that celebrates the rich heritage of Indian fashion 
            while embracing modern design sensibilities.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
          <p className="mb-6">
            What started as a small boutique has grown into a beloved fashion destination, 
            thanks to our commitment to quality, authenticity, and customer satisfaction. 
            We believe that fashion should be accessible, sustainable, and true to our roots.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to make authentic Indian fashion accessible to everyone while 
            maintaining the highest standards of quality and craftsmanship. We work 
            directly with artisans and designers across India to bring you exclusive 
            collections that blend traditional techniques with contemporary styles.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">Premium materials and expert craftsmanship in every piece</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Sustainable Fashion</h3>
              <p className="text-gray-600">Committed to ethical practices and sustainable materials</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">Dedicated to providing exceptional shopping experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}