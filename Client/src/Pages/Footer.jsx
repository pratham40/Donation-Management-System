import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Donation Management System is dedicated to connecting donors with causes they care about.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/donations" className="hover:text-primary">Donations</Link></li>
              <li><Link to="/reports" className="hover:text-primary">Reports</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="text-sm">
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-primary"><FiFacebook /></a>
              <a href="#" className="text-xl hover:text-primary"><FiTwitter /></a>
              <a href="#" className="text-xl hover:text-primary"><FiInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-base-300 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Donation Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
