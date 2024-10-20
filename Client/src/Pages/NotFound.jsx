
import { FiAlertTriangle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
        <div className="text-center">
          <FiAlertTriangle className="text-8xl text-error mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl mb-8">Oops! The page you`re looking for doesn`t exist.</p>
        </div>
        <button onClick={() => navigate(-1)} className="btn btn-primary">
            Go Back Home
        </button>
      </div>
  );
};

export default NotFound;
