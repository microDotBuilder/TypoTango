import { HandCoinsIcon, MailIcon } from "lucide-react";
import "./footer.css";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="keyTips">
        <div className="keyTips-top">
          <p className="keyHint">tab</p>+<p className="keyHint">enter</p>-
          Restart Test
        </div>
        {/* <br /> */}
        <div className="keyTips-bottom">
          <p className="keyHint">ctrl/cmd</p>+<p className="keyHint">shift</p>+
          <p className="keyHint">p</p>
          or
          <p className="keyHint">esc</p>- Command Line
        </div>
      </div>
      <div className="leftright-container">
        <div className="left">
          <button className="textButton" id="contactPopupButton">
            {/* <i className="fas fa-fw fa-envelope"></i> */}
            <MailIcon className="icon" />
            <Link to="/contact">
              <div className="text">contact</div>
            </Link>
          </button>
          <button id="supportMeButton" className="textButton">
            <HandCoinsIcon className="icon" />
            <div className="text">support</div>
          </button>
        </div>
        <div className="right">
          <a
            href="https://github.com/microDotBuilder/TypoTango/issues"
            className="textButton"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fas fa-fw fa-code"></i>
            <div className="text">github</div>
          </a>
          {/* <a
            href="https://www.discord.gg/monkeytype"
            className="textButton"
            target="_blank"
            rel="noreferrer noopener"
            className="discordLink"
          >
            <i className="fab fa-fw fa-discord"></i>
            <div className="text">discord</div>
          </a>
          <a
            href="https://x.com/monkeytype"
            className="textButton"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-fw fa-twitter"></i>
            <div className="text">twitter</div>
          </a> */}
          <a
            href="/terms-of-service.html"
            className="textButton"
            target="_blank"
          >
            <i className="fas fa-fw fa-file-contract"></i>
            <div className="text">terms</div>
          </a>
          <a
            href="/security-policy.html"
            className="textButton"
            target="_blank"
          >
            <i className="fas fa-fw fa-shield-alt"></i>
            <div className="text">security</div>
          </a>
          <a href="/privacy-policy.html" className="textButton" target="_blank">
            <i className="fas fa-fw fa-lock"></i>
            <div className="text">privacy</div>
          </a>
        </div>

        {/* <div>
        <i className="fas fa-file"></i>
        Terms & Conditions
      </div> */}
      </div>
    </footer>
  );
}

export default Footer;
