import PropTypes from 'prop-types';
import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import MiniSpinner from './MiniSpinner';

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex min-h-[10rem] items-center justify-center p-8">
        <MiniSpinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    toast.error('Please log in to access this page');
    navigate('/login');
  }

  if (isAuthenticated) return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
