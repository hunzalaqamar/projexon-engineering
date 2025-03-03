import React, { useEffect } from "react";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white text-black min-h-screen p-8 mt-[100px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to Projexon Engineering Solutions. We respect your privacy and
          are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use our website or services.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          phone number, and company details when you voluntarily provide them
          through contact forms or inquiries about our engineering solutions.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the collected information to respond to your inquiries, provide
          product updates, and improve our offerings. We may also use it to
          communicate with you regarding our electrical and mechanical
          engineering services, new product launches, or special events.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="mb-4">
          We implement reasonable measures to protect your personal information
          from unauthorized access or disclosure. However, no security system is
          impenetrable. By using our website, you acknowledge that the internet
          is not 100% secure and that we cannot guarantee absolute data
          security.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Sharing of Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. We
          may share data with trusted partners or service providers who assist
          us in delivering our engineering solutions, but only under strict
          confidentiality agreements.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Cookies and Tracking
        </h2>
        <p className="mb-4">
          Our website may use cookies to enhance your browsing experience. You
          can disable cookies through your browser settings, but doing so may
          limit certain functionalities of our site.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Choices</h2>
        <p className="mb-4">
          You may opt out of receiving promotional emails by following the
          unsubscribe link in any email we send. If you have any concerns about
          your personal information, please contact us at info@projexon.pk.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated “Last Modified” date.
        </p>
        <p className="mt-8">
          <strong>Last Modified:</strong> Feb 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
