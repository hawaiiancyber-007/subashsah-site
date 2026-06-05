"use client";

import Countdown from "@/components/Countdown";

export default function HomePage() {
  return (
    <>
      {/* HERO / LANDING VIEW (Edge-to-Edge, No Scroll Viewport) */}
      <div className="hero" id="home">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/media/wave.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          {/* Native-injected countdown module */}
          <Countdown />

          {/* Clicking your name takes you straight back to the landing view */}
          <a href="#home" className="hero-name-link">
            <h1 className="hero-name">Subash Sah</h1>
          </a>
          <p className="hero-subtitle">
            • SBOLC-005-26 • Signal Officer • Data Systems Engineer •
          </p>
        </div>
      </div>
    </>
  );
}