import { useState, useEffect } from "react";
import { Construction, Mail, Github, ExternalLink, Home } from "lucide-react";
import { Link } from "react-router";
import "./contact.css";

export function Contact() {
  const [showCursor, setShowCursor] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "Under Construction";

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
    <div className="contact-container">
      <div className="contact-content">
        {/* Construction Icon */}
        <div className="construction-icon">
          <Construction className="icon" />
        </div>

        {/* Main Heading with Typing Effect */}
        <h1 className="main-heading">
          {fullText.substring(0, textIndex)}
          <span className={`cursor ${showCursor ? "visible" : ""}`}>|</span>
        </h1>

        {/* Description */}
        <div className="description">
          <p>We're building something amazing for you!</p>
          <p>The contact page is currently under development.</p>
        </div>

        {/* Alternative Contact Options */}
        <div className="contact-alternatives">
          <h3>In the meantime, you can reach us through:</h3>
          <div className="contact-links">
            <a
              href="https://github.com/microDotBuilder/TypoTango/issues"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="link-icon" />
              <span>GitHub Issues</span>
              <ExternalLink className="external-icon" />
            </a>

            <a href="mailto:support@typotango.com" className="contact-link">
              <Mail className="link-icon" />
              <span>Email Support</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="coming-soon-badge">
          <span>Coming Soon</span>
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
