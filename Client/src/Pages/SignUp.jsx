import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';
import HomeLayout from '../Layouts/HomeLayout';

const SignUp = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatar(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <HomeLayout>
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-6">Sign Up</h2>
            <form>
              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter your full name" className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
              </div>

              <div className="form-control w-full max-w-xs mb-6">
                <label className="label">
                  <span className="label-text">Avatar</span>
                </label>
                <div className="flex items-center space-x-4">
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
                  <label className="btn btn-outline btn-primary">
                    <FiUpload className="mr-2" />
                    Upload
                    <input type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" />
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center mt-4">
              Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default SignUp;
