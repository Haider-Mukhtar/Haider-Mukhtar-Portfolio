import { ReactNode } from "react";

import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
