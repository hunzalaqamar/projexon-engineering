import React, { useEffect } from "react";

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white text-black min-h-screen p-8 mt-[100px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
        <p className="mb-4">
          Welcome to Projexon Engineering Solutions. By accessing or using our
          website, you agree to comply with these Terms of Use. If you do not
          agree with any part of these terms, please refrain from using our
          site.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Intellectual Property
        </h2>
        <p className="mb-4">
          All content, trademarks, and logos on this site are the property of
          Projexon Engineering Solutions or our licensors. You may not use,
          reproduce, or distribute any content without our prior written
          permission.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Use of Our Services
        </h2>
        <p className="mb-4">
          Our engineering services, including electrical and mechanical
          solutions, are subject to separate contractual agreements. These Terms
          of Use govern only your use of our website. You agree not to misuse or
          attempt to disrupt the operation of our site.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Limitation of Liability
        </h2>
        <p className="mb-4">
          We strive to keep our website accurate and up-to-date. However, we
          make no warranties or representations regarding the completeness or
          reliability of any information. Projexon Engineering Solutions shall
          not be liable for any direct or indirect damages arising from your use
          of this site.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Third-Party Links
        </h2>
        <p className="mb-4">
          Our site may contain links to third-party websites. We do not endorse
          or control these external sites and are not responsible for their
          content or privacy practices.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms of Use at any time. Any
          changes will be posted on this page. Your continued use of the site
          after modifications indicates your acceptance of the updated terms.
        </p>
        <p className="mt-8">
          <strong>Last Modified:</strong> Feb 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
