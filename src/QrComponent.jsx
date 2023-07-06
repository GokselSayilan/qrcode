import React from "react";
import "./style.css";

function QrComponent() {
  return (
    <div className="container">
      <div className="qrcode-card">
        <img src="assets/image-qr-code.png" className="qrcode-card-img" />
        <span className="qrcode-title">
          Improve your front-end skills by building projects
        </span>
        <span className="qrcode-desc">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </span>
      </div>
    </div>
  );
}

export default QrComponent;
