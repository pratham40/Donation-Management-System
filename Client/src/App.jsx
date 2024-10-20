import './App.css';

import { Route,Routes } from 'react-router-dom';

import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import SignUp from './Pages/SignUp';
import TermsOfService from './Pages/TermsOfService';

const App = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/contact" element={<ContactUs />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
);

export default App;
