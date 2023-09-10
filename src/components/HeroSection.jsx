import Lottie from "lottie-react";
import animationData from "../components/animation_lmd3hd1t.json";

function HeroSection() {
  return (
    <div className="heroSectionMainComponent">
      <div className="innerMainSection">
        <div className="innerMainSectionLeft">
          <h1>Trivia Million</h1>
          <p>
            Dive into the world of knowledge and entertainment with
            TriviaMillion! Explore a diverse collection of Million of quiz
            questions spanning various categories such as Science, History,
            Geography,General Knowledge and more. Challenge yourself and test
            your wits on topics ranging from the mysteries of the universe to
            the annals of history.
          </p>
          <button>Get Started</button>
        </div>

        <div className="innerMainSectionRight">
          <div style={{ height: "60vh" }}>
            <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
