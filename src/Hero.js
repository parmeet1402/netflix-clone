import React from "react";
import HeroButton from "./HeroButton";
const Hero = () => (
  <div
    id="hero"
    className="Hero"
    style={{
      backgroundImage:
        "url(https://filmdaily.co/wp-content/uploads/2019/07/13MH.jpeg)"
    }}
  >
    <div className="content">
      <img
        className="logo"
        src="https://fanart.tv/fanart/tv/358570/hdtvlogo/la-casa-de-papel-money-heist-5cb8de9567f11.png"
        alt="Money Heist background"
      />
      <h2>Season 3 now available</h2>
      <p>
        Eight thieves take hostages and lock themselves in the Royal Mint of
        Spain as a criminal mastermind manipulates the police to carry out his
        plan.
      </p>
      <div className="button-wrapper">
        <HeroButton primary={true} text="Watch now" />
        <HeroButton primary={false} text="+ My list" />
      </div>
    </div>
    <div className="overlay" />
  </div>
);

export default Hero;
