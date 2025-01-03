import { BrowserRouter } from "react-router";

function Providers({children}) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

export default Providers;