import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-600 px-4 py-20 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="animate__animated animate__fadeIn animate__delay-1s mb-6 text-5xl font-bold">
            Terms of Service
          </h1>
          <p className="animate__animated animate__fadeIn animate__delay-2s mb-6 text-lg">
            Please read our Terms of Service carefully before using our
            platform.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="prose prose-lg space-y-8 text-gray-800">
          <h2>Introduction</h2>
          <p>
            Welcome to iReporter. By using our services, you agree to comply
            with and be bound by the following terms and conditions. These terms
            apply to all visitors, users, and others who access or use the
            platform.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using the iReporter app, you agree to be bound by
            these Terms of Service. If you do not agree with any part of these
            terms, you may not use the platform.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms of Service at
            any time. Any changes will be posted on this page with an updated
            revision date. We encourage you to review these terms periodically.
          </p>

          <h2>Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities under your account. You
            agree to immediately notify us of any unauthorized use of your
            account.
          </p>

          <h2>Prohibited Conduct</h2>
          <p>
            When using iReporter, you agree not to engage in any of the
            following activities:
            <ul>
              <li>Posting illegal, harmful, or offensive content.</li>
              <li>
                Engaging in harassment, abuse, or any discriminatory behavior.
              </li>
              <li>
                Attempting to gain unauthorized access to our systems or
                services.
              </li>
              <li>Using our services for fraudulent or illegal purposes.</li>
            </ul>
          </p>

          <h2>Termination of Account</h2>
          <p>
            We may suspend or terminate your account at our sole discretion if
            we believe you have violated any of these terms. Upon termination,
            your access to the platform will be immediately revoked, and you
            will no longer be able to use our services.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            Your use of our platform is also governed by our{' '}
            <Link to="/service" className="text-blue-600">
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect your personal
            information.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Our platform is provided ``as is`` without any warranties of any
            kind. We do not guarantee that the service will be free from
            interruptions, errors, or defects. You use the platform at your own
            risk.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            We are not liable for any damages arising from the use of our
            platform, including but not limited to indirect, incidental, or
            consequential damages. This applies to damages arising from errors
            or omissions in the content, downtime, or loss of data.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold iReporter harmless from any claims,
            losses, or damages arising from your use of the platform, including
            legal fees and costs.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Service shall be governed by the laws of the
            jurisdiction in which iReporter operates. Any disputes will be
            resolved in the appropriate courts located within that jurisdiction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:ireporter14@gmail.com" className="text-blue-600">
                support@ireporterr.vercel.app
              </a>
            </li>
            <li>Phone: +234 (810) 994-5441</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
