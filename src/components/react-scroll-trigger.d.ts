declare module "react-scroll-trigger" {
  import { ComponentType } from "react";

  interface ScrollTriggerProps {
    onEnter?: () => void;
    onExit?: () => void;
    children?: React.ReactNode;
  }

  const ScrollTrigger: ComponentType<ScrollTriggerProps>;

  export default ScrollTrigger;
}