import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Works, Assignments, Skills } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Works />
        <Assignments />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;