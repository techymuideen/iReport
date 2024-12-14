import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/home">
      <h1 className="text-2xl font-bold text-white">iReporter</h1>
    </Link>
  );
};

export default Logo;
