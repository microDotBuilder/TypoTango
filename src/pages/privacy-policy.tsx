import { useState, useEffect } from "react";
import { Lock, Home } from "lucide-react";
import { Link } from "react-router";
import "./legal.css";

export function PrivacyPolicy() {
  const [showCursor, setShowCursor] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "Privacy Policy";

  // Typing animation effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const textInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < fullText.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 100);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="legal-container">
      <div className="legal-content">
        {/* Lock Icon */}
        <div className="legal-icon">
          <Lock className="icon" />
        </div>

        {/* Main Heading with Typing Effect */}
        <h1 className="main-heading">
          {fullText.substring(0, textIndex)}
          <span className={`cursor ${showCursor ? "visible" : ""}`}>|</span>
        </h1>

        {/* Last Updated */}
        <div className="last-updated">
          <p>This privacy policy was last updated on December 15, 2024.</p>
        </div>

        {/* Document Content */}
        <div className="document-content">
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              At TypoTango, we respect your privacy and are committed to
              protecting your personal information. This privacy policy explains
              how we collect, use, and safeguard your information when you use
              our typing test platform.
            </p>
          </section>

          <section className="legal-section">
            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>
                Contact information when you reach out to us via email or
                contact forms
              </li>
              <li>Feedback and suggestions you submit</li>
              <li>
                Account information if you choose to create an account (future
                feature)
              </li>
            </ul>

            <h3>Information We Collect Automatically</h3>
            <ul>
              <li>
                Typing test results and statistics (stored locally in your
                browser)
              </li>
              <li>Usage patterns and preferences</li>
              <li>Browser type and version</li>
              <li>IP address and general location (for analytics purposes)</li>
              <li>Pages visited and time spent on our site</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our typing test service</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Storage and Security</h2>
            <p>
              Your typing test data is primarily stored locally in your
              browser's local storage. This means your personal typing
              statistics remain on your device and are not transmitted to our
              servers.
            </p>
            <p>
              For any data we do collect, we implement appropriate security
              measures including encryption, secure servers, and access controls
              to protect your information from unauthorized access, alteration,
              or disclosure.
            </p>
          </section>

          <section className="legal-section">
            <h2>Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze site usage and performance</li>
              <li>Provide personalized content</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences.
              Note that disabling cookies may affect the functionality of our
              service.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, hosting, and other
              operational purposes. These services may collect information about
              your use of our site. We carefully select these services and
              ensure they meet our privacy standards.
            </p>
            <p>Third-party services we may use include:</p>
            <ul>
              <li>Google Analytics (for usage analytics)</li>
              <li>GitHub (for hosting and development)</li>
              <li>Email services (for communication)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties except in the following
              circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>
                With service providers who assist us in operating our site
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul>
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us at
              privacy@typotango.com.
            </p>
          </section>

          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              Our service is not directed to children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us to have
              it removed.
            </p>
          </section>

          <section className="legal-section">
            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your information in accordance with this privacy
              policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page and updating the "last updated" date. We encourage you
              to review this policy periodically.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our privacy
              practices, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@typotango.com</li>
              <li>General inquiries: support@typotango.com</li>
            </ul>
          </section>
        </div>

        {/* Back to Home Link */}
        <div className="back-to-home">
          <Link to="/home" className="home-link">
            <Home className="home-icon" />
            <span>Back to TypoTango</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
