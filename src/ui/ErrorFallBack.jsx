import PropTypes from 'prop-types';
import Button from './Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 p-12">
      <div className="max-w-4xl rounded-md border border-gray-200 bg-white p-12 text-center">
        <h1 className="mb-4 text-2xl font-bold">Something went wrong 🧐</h1>
        <p className="font-sono mb-8 text-gray-500">{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
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
