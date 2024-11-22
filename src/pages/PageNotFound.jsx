import { useMoveBack } from '../hooks/useMoveBack';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className='h-screen bg-gray-50 flex items-center justify-center p-12'>
      <div className='bg-white border border-gray-200 rounded-md p-12 max-w-4xl text-center'>
        <h1 className='text-2xl font-bold text-gray-800 mb-8'>
          The page you are looking for could not be found 😢
        </h1>
        <button
          onClick={moveBack}
          className='bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all'>
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
