import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-700 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Column - Description */}
          <div className="w-full sm:w-2/4">
            <h2 className="mb-4 text-2xl font-bold">iReporter</h2>
            <p>
              iReporter is a platform that allows users to report issues or
              incidents in their communities. Help improve the world by sharing
              your observations.
            </p>
          </div>

          {/* Middle Column - Links */}
          <div className="w-full sm:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Social Media Icons */}
          <div className="w-full sm:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} className="hover:text-blue-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} className="hover:text-blue-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} className="hover:text-pink-600" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} className="hover:text-gray-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p>© {new Date().getFullYear()} iReporter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
