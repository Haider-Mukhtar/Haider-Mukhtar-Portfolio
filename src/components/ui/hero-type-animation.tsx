import { TypeAnimation } from "react-type-animation";

function HeroTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Computer Engineer",
        1000,
        "Front End Developer",
        1000,
        "React JS Developer",
        1000,
        "React Native Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}

export default HeroTypeAnimation;
