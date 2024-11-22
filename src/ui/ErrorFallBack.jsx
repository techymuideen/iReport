import PropTypes from 'prop-types';
import Button from './Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className='h-screen bg-gray-50 flex items-center justify-center p-12'>
      <div className='bg-white border border-gray-200 rounded-md p-12 max-w-4xl text-center'>
        <h1 className='mb-4 text-2xl font-bold'>Something went wrong 🧐</h1>
        <p className='font-sono text-gray-500 mb-8'>{error.message}</p>
        <Button size='large' onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
