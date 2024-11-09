
import { Link } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';

const TermsOfService = () => {
  return (
    <HomeLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using our donation management system, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Use of Service</h2>
            <p>You agree to use our service only for lawful purposes and in accordance with these Terms. You are prohibited from using the service in any way that could damage, disable, or impair the service.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Donations</h2>
            <p>All donations made through our platform are final and non-refundable. We are not responsible for any errors or inaccuracies in donation information provided by users.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
            <p>The content, organization, graphics, design, and other matters related to the service are protected under applicable copyrights and other proprietary laws.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Your continued use of the service after any such changes constitutes your acceptance of the new Terms.</p>
          </section>
        </div>
        <div className="mt-8">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </HomeLayout>
  );
};

export default TermsOfService;
