import {
  FaBullhorn,
  FaCheckCircle,
  FaClipboardList,
  FaRegEdit,
  FaSearch,
  FaUsers,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';

const HomePage = () => {
  const { isAuthenticated } = useUser();

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-blue-600 px-4 py-20 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="animate__animated animate__fadeIn animate__delay-1s mb-6 text-5xl font-bold">
            Welcome to iReporter
          </h1>
          <p className="animate__animated animate__fadeIn animate__delay-2s mb-6 text-lg">
            Empowering citizens to report issues quickly and efficiently for a
            better community.
          </p>
          {!isAuthenticated && (
            <Link to="/signup">
              <button className="animate__animated animate__fadeIn animate__delay-3s rounded-lg bg-gray-50 px-8 py-3 text-xl text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-100">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">
          Key Features
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex transform flex-col items-center rounded-lg bg-blue-50 p-8 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <FaBullhorn className="mb-6 text-center text-5xl text-blue-600" />
            <h3 className="mb-4 text-2xl font-semibold">Easy Reporting</h3>
            <p className="text-gray-600">
              Quickly report issues with an intuitive and simple form.
            </p>
          </div>
          <div className="flex transform flex-col items-center rounded-lg bg-blue-50 p-8 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <FaRegEdit className="mb-6 text-center text-5xl text-blue-600" />
            <h3 className="mb-4 text-2xl font-semibold">Track Reports</h3>
            <p className="text-gray-600">
              Track the status of your reported issues in real-time.
            </p>
          </div>
          <div className="flex transform flex-col items-center rounded-lg bg-blue-50 p-8 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <FaUsers className="mb-6 text-center text-5xl text-blue-600" />
            <h3 className="mb-4 text-2xl font-semibold">Community Support</h3>
            <p className="text-gray-600">
              Collaborate with the community to resolve issues faster.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">
          How It Works
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex transform flex-col items-center rounded-lg bg-white p-8 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <FaClipboardList className="mb-6 text-center text-5xl text-blue-600" />
            <h3 className="mb-4 text-2xl font-semibold">
              Step 1: Submit a Report
            </h3>
            <p className="text-gray-600">
              Fill out a simple form to describe the issue and submit it for
              review.
            </p>
          </div>
          <div className="flex transform flex-col items-center rounded-lg bg-white p-8 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <FaSearch className="mb-6 text-center text-5xl text-blue-600" />
            <h3 className="mb-4 text-2xl font-semibold">
              Step 2: Review and Verify
            </h3>
            <p className="text-gray-600">
              Our team reviews the submitted report to verify the details and
              validity.
            </p>
          </div>
          <div className="flex transform flex-col items-center rounded-lg bg-white p-8 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <FaCheckCircle className="mb-6 text-center text-5xl text-blue-600" />
            <h3 className="mb-4 text-2xl font-semibold">
              Step 3: Resolve and Notify
            </h3>
            <p className="text-gray-600">
              Once resolved, you’ll receive a notification with the resolution
              details.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-4 py-20">
        <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">
          What Our Users Say
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-8 text-center shadow-lg">
            <p className="mb-4 italic">
              &quot;iReporter made it so easy to report issues in my community.
              It`s fast and reliable!&quot;
            </p>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-600">Community Leader</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-8 text-center shadow-lg">
            <p className="mb-4 italic">
              &quot;I love how I can track my report’s progress. Great tool for
              ensuring accountability!&quot;
            </p>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-600">Concerned Citizen</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-8 text-center shadow-lg">
            <p className="mb-4 italic">
              &quot;This app has made reporting issues incredibly simple and
              efficient. Highly recommended!&quot;
            </p>
            <p className="font-semibold">Michael Johnson</p>
            <p className="text-sm text-gray-600">Local Resident</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
