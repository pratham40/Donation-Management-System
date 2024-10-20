import { useState } from 'react';
import { FiEye, FiEyeOff, FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';

const SignUp = () => {
  const [avatar, setAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatar(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <HomeLayout>
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
        <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Sign Up</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter your full name" className="input input-bordered w-full" />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input type="number" placeholder="Enter your age" className="input input-bordered w-full" />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered w-full pr-10"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className="form-control w-full sm:col-span-2">
                <label className="label">
                  <span className="label-text">Avatar</span>
                </label>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      {avatar ? (
                        <img src={avatar} alt="Avatar preview" />
                      ) : (
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16 flex items-center justify-center">
                          <span className="text-xl">?</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <label className="btn btn-outline btn-primary w-full sm:w-auto">
                    <FiUpload className="mr-2" />
                    Upload
                    <input type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" />
                  </label>
                </div>
              </div>

              <div className="form-control mt-6 sm:col-span-2">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center mt-4 sm:col-span-2">
              Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default SignUp;
