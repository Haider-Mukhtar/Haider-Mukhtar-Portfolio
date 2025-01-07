import { TypeAnimation } from "react-type-animation";

function SkillsTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "HTML",
        1000,
        "CSS",
        1000,
        "Bootstrap",
        1000,
        "Tailwind CSS",
        1000,
        "SASS",
        1000,
        "JavaScript",
        1000,
        "React JS",
        1000,
        "React Native",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}

export default SkillsTypeAnimation;
