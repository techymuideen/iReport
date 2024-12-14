const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-600 px-4 py-20 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="animate__animated animate__fadeIn animate__delay-1s mb-6 text-5xl font-bold">
            Privacy Policy
          </h1>
          <p className="animate__animated animate__fadeIn animate__delay-2s mb-6 text-lg">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="prose prose-lg space-y-8 text-gray-800">
          <h2>Introduction</h2>
          <p>
            At iReporter, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect the following types of information:
            <ul>
              <li>
                <strong>Personal Identification Information:</strong> Name,
                email address, phone number, etc.
              </li>
              <li>
                <strong>Usage Data:</strong> Information on how you use the
                platform, including your interactions and preferences.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar technologies to enhance your experience on
                the platform.
              </li>
            </ul>
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
            <ul>
              <li>To provide and maintain our services.</li>
              <li>To improve and personalize your experience.</li>
              <li>
                To communicate with you, including sending updates and
                notifications.
              </li>
              <li>To ensure the security and integrity of our platform.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </p>

          <h2>How We Protect Your Information</h2>
          <p>
            We implement industry-standard security measures to protect your
            data from unauthorized access, use, or disclosure. This includes
            encryption, secure servers, and regular security audits.
          </p>
          <p>
            While we strive to use commercially acceptable means to protect your
            personal information, please be aware that no method of transmission
            over the internet is 100% secure.
          </p>

          <h2>Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal data to third parties. However,
            we may share your information in the following situations:
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share your data with
                third-party vendors who help us run the platform.
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose your
                information if required by law or to comply with legal
                processes.
              </li>
            </ul>
          </p>

          <h2>Your Data Rights</h2>
          <p>
            You have the right to:
            <ul>
              <li>Access your personal data.</li>
              <li>Request the correction or deletion of your data.</li>
              <li>
                Object to the processing of your data in certain circumstances.
              </li>
            </ul>
          </p>
          <p>
            To exercise these rights, please contact us at the details provided
            below.
          </p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your user
            experience, analyze usage patterns, and customize content and
            advertisements. You can control the use of cookies through your
            browser settings.
          </p>

          <h2>Children`s Privacy</h2>
          <p>
            Our platform is not intended for use by children under the age of
            13. We do not knowingly collect personal information from children.
            If we become aware that we have collected data from a child, we will
            take steps to delete that information.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your data, please contact us:
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

      {/* Footer Section */}
    </div>
  );
};

export default PrivacyPolicyPage;
