import React from "react";
import { Link, useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const txHash = location.search.replace("?tx_hash=", "");

  return (
    <div className="sr-root">
      <div className="sr-main">
        <header className="sr-header">
          <div className="sr-header__logo"></div>
        </header>
        <div className="sr-payment-summary completed-view">
          <h1>Your payment succeeded</h1>
          <h4>View response:</h4>
        </div>
        <div className="sr-section completed-view">
          <div className="sr-callout">
            <pre>{txHash}</pre>
          </div>
          <Link to="/">Restart demo</Link>
        </div>
      </div>
      <div className="sr-content">
        <div className="pasha-image-stack">
          <img
            alt=""
            src="https://picsum.photos/280/320?random=1"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=2"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=3"
            width="140"
            height="160"
          />
          <img
            alt=""
            src="https://picsum.photos/280/320?random=4"
            width="140"
            height="160"
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
