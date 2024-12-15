import PropTypes from 'prop-types';
import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';
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
    navigate('/home');
  }

  if (isAuthenticated) return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
