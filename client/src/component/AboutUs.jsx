import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-16">
      <Helmet>
        <title>About - Jutta Adda</title>
      </Helmet>
      <div className="container mx-auto text-center md:text-left max-w-4xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-gray-900">Jutta Adda</span>, your trusted companion for premium shoe delivery! We are dedicated to bringing you stylish, comfortable, and high‑quality footwear right to your doorstep.
          Whether you're at home, at work, or on the go, we make sure you never miss out on the perfect pair of shoes.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mt-8">Our Story</h2>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Jutta Adda was founded with a mission to redefine footwear shopping. We believe that everyone deserves access to top‑quality shoes—from trendy sneakers to elegant formals—without the hassle of visiting stores.
          With just a few taps, we deliver your favorite footwear directly to you.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mt-8">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
          <li><span className="font-semibold text-gray-900">Fast Delivery:</span> Get your shoes delivered quickly and conveniently.</li>
          <li><span className="font-semibold text-gray-900">Wide Collection:</span> Explore footwear for all styles, occasions, and ages.</li>
          <li><span className="font-semibold text-gray-900">Affordable Prices:</span> Enjoy the best deals on top‑quality shoes.</li>
          <li><span className="font-semibold text-gray-900">Easy Shopping:</span> A smooth, user‑friendly ordering experience.</li>
          <li><span className="font-semibold text-gray-900">24/7 Support:</span> We're always here to help you.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 mt-8">Our Mission</h2>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Our mission is to connect people with quality footwear effortlessly. Whether you need something stylish, sporty, or formal, Jutta Adda makes sure you get the perfect pair—anytime, anywhere.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mt-8">Join Us Today!</h2>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Order your favorite shoes now and experience the most convenient and reliable shoe delivery service with Jutta Adda. Great shoes are only a few clicks away!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
