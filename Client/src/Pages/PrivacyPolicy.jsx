import React from 'react';
import { Link } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';

const PrivacyPolicy = () => {
  return (
    <HomeLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a donation, or contact us for support. This may include your name, email address, and donation details.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to operate and improve our services, process your donations, communicate with you, and protect against fraudulent or illegal activities.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Information Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform or servicing you.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </section>
        </div>
        <div className="mt-8">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </HomeLayout>
  );
};

export default PrivacyPolicy;
