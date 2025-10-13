import { useState, useEffect } from "react";
import {
  Heart,
  Mail,
  Github,
  ExternalLink,
  Home,
  Coffee,
  Star,
} from "lucide-react";
import { Link } from "react-router";
import "./support.css";

export function Support() {
  const [showCursor, setShowCursor] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "Support TypoTango";

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
    <div className="support-container">
      <div className="support-content">
        {/* Heart Icon */}
        <div className="support-icon">
          <Heart className="icon" />
        </div>

        {/* Main Heading with Typing Effect */}
        <h1 className="main-heading">
          {fullText.substring(0, textIndex)}
          <span className={`cursor ${showCursor ? "visible" : ""}`}>|</span>
        </h1>

        {/* Description */}
        <div className="description">
          <p>Help us keep TypoTango free and amazing!</p>
          <p>Your support helps us maintain and improve this typing tool.</p>
        </div>

        {/* Support Options */}
        <div className="support-options">
          <h3>Ways to support us:</h3>
          <div className="support-links">
            <a
              href="https://github.com/microDotBuilder/TypoTango"
              className="support-link star"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="link-icon" />
              <span>Star on GitHub</span>
              <ExternalLink className="external-icon" />
            </a>

            <a
              href="https://github.com/microDotBuilder/TypoTango/issues"
              className="support-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="link-icon" />
              <span>Report Issues</span>
              <ExternalLink className="external-icon" />
            </a>

            <a href="mailto:support@typotango.com" className="support-link">
              <Mail className="link-icon" />
              <span>Email Feedback</span>
              <ExternalLink className="external-icon" />
            </a>

            <a
              href="#"
              className="support-link coffee"
              onClick={(e) => {
                e.preventDefault();
                alert("Coffee support coming soon! ☕");
              }}
            >
              <Coffee className="link-icon" />
              <span>Buy us Coffee</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="thank-you">
          <p>Thank you for using TypoTango! 🙏</p>
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
