import { useGoogleLogin } from '@react-oauth/google';
import { useGoogleAuth } from '../authentication/useGoogleAuth';
import MiniSpinner from '../../ui/MiniSpinner';

const GoogleAuth = () => {
  const { handleGoogleSuccess, isLoading } = useGoogleAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: (error) => console.error('Google Login Error:', error),
    flow: 'auth-code',
  });

  return (
    <button
      onClick={googleLogin}
      type="button"
      className="flex w-full items-center justify-center rounded border border-gray-300 px-4 py-2 shadow hover:bg-gray-100 focus:outline-none"
    >
      {isLoading ? (
        <MiniSpinner />
      ) : (
        <span className="flex items-center">
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google logo"
            className="mr-2 h-5 w-5"
          />
          Sign up with Google
        </span>
      )}
    </button>
  );
};

export default GoogleAuth;
