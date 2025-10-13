import { useState, useEffect } from "react";
import { Shield, ExternalLink, Home } from "lucide-react";
import { Link } from "react-router";
import "./legal.css";

export function SecurityPolicy() {
  const [showCursor, setShowCursor] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "Security Policy";

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
        {/* Shield Icon */}
        <div className="legal-icon">
          <Shield className="icon" />
        </div>

        {/* Main Heading with Typing Effect */}
        <h1 className="main-heading">
          {fullText.substring(0, textIndex)}
          <span className={`cursor ${showCursor ? "visible" : ""}`}>|</span>
        </h1>

        {/* Last Updated */}
        <div className="last-updated">
          <p>This security policy was last updated on December 15, 2024.</p>
        </div>

        {/* Document Content */}
        <div className="document-content">
          <section className="legal-section">
            <h2>Security Commitment</h2>
            <p>
              At TypoTango, we take the security of our users and their data
              seriously. This security policy outlines our commitment to
              protecting your information and maintaining a secure environment
              for our typing test platform.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your
              data:
            </p>
            <ul>
              <li>
                All data transmission is encrypted using HTTPS/TLS protocols
              </li>
              <li>
                User data is stored securely with appropriate access controls
              </li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Secure coding practices and regular dependency updates</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Information We Collect</h2>
            <p>
              We collect minimal information necessary to provide our service:
            </p>
            <ul>
              <li>
                Typing test results and statistics (stored locally in your
                browser)
              </li>
              <li>Basic usage analytics to improve our service</li>
              <li>Error logs for debugging and service improvement</li>
            </ul>
            <p>
              We do not collect personal information unless explicitly provided
              by you through our contact or support channels.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Storage and Retention</h2>
            <p>
              Your typing test data is primarily stored locally in your
              browser's local storage. We do not store your personal typing data
              on our servers unless you explicitly choose to sync your data
              across devices.
            </p>
            <p>
              Any data we do collect is retained only as long as necessary to
              provide our service and is deleted according to our data retention
              policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for analytics and service
              improvement. These services are carefully selected and must meet
              our security standards. We do not share personal data with third
              parties without your explicit consent.
            </p>
          </section>

          <section className="legal-section">
            <h2>Security Incident Response</h2>
            <p>In the event of a security incident, we will:</p>
            <ul>
              <li>Immediately investigate and contain the incident</li>
              <li>
                Notify affected users within 72 hours if personal data is
                involved
              </li>
              <li>Work with security experts to prevent future incidents</li>
              <li>Provide regular updates on our response efforts</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Reporting Security Issues</h2>
            <p>
              If you discover a security vulnerability, please report it
              responsibly:
            </p>
            <ul>
              <li>Email: security@typotango.com</li>
              <li>
                Do not publicly disclose vulnerabilities until we have had time
                to respond
              </li>
              <li>Provide detailed information about the vulnerability</li>
              <li>Allow us reasonable time to address the issue</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>User Responsibilities</h2>
            <p>To help maintain security, users should:</p>
            <ul>
              <li>Keep their browsers and devices updated</li>
              <li>Use strong, unique passwords if creating accounts</li>
              <li>Report suspicious activity or security concerns</li>
              <li>
                Not attempt to exploit vulnerabilities or compromise our systems
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Updates to This Policy</h2>
            <p>
              We may update this security policy from time to time. Changes will
              be posted on this page with an updated revision date. We encourage
              you to review this policy periodically.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>
              If you have questions about this security policy or our security
              practices, please contact us at security@typotango.com.
            </p>
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
