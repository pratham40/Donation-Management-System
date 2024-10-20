import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiBarChart2, FiUsers } from 'react-icons/fi';
import HomeLayout from '../Layouts/HomeLayout';
import Footer from './Footer';

const Home = () => {
  return (
    <HomeLayout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center my-6 md:my-8">Welcome to Donation Management System</h1>
        
        <div className="hero bg-base-200 rounded-lg shadow-xl p-4 md:p-8 mb-6 md:mb-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Make a Difference Today</h2>
              <p className="mb-4 md:mb-6">Your generosity can change lives. Join us in our mission to create a better world through the power of giving.</p>
              <Link to="/donations" className="btn btn-primary btn-sm md:btn-md">Donate Now</Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FiHeart className="text-3xl md:text-4xl text-primary mb-3 md:mb-4" />
              <h3 className="card-title text-lg md:text-xl">Make a Donation</h3>
              <p className="text-sm md:text-base">Support causes you care about with easy and secure donations.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FiBarChart2 className="text-3xl md:text-4xl text-primary mb-3 md:mb-4" />
              <h3 className="card-title text-lg md:text-xl">Track Your Impact</h3>
              <p className="text-sm md:text-base">See how your contributions are making a real difference.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FiUsers className="text-3xl md:text-4xl text-primary mb-3 md:mb-4" />
              <h3 className="card-title text-lg md:text-xl">Join Our Community</h3>
              <p className="text-sm md:text-base">Connect with like-minded individuals passionate about giving back.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Get Started Today</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base">Create an account to start making a difference or log in to continue your journey of giving.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link to="/signup" className="btn btn-primary btn-sm md:btn-md">Sign Up</Link>
            <Link to="/login" className="btn btn-secondary btn-sm md:btn-md">Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </HomeLayout>
  );
};

export default Home;
