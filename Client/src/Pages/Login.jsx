import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';
import HomeLayout from '../Layouts/HomeLayout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <div className="relative">
                  <FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full max-w-xs pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-control w-full max-w-xs mb-6">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <FiLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full max-w-xs pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mt-4">
              Don`t have an account? <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Login;
