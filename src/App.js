import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import AllProjects from "./pages/AllProjects";
import Favourites from "./pages/Favourites";
import NotFound from "./pages/NotFound";

import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    < div className="main">
      < Navigation />
      < div className="main-app" >
        <Routes>
          <Route exact path="/" element=
            {< Home />} />
          <Route exact path="/new-project" element=
            {<NewProject />} />
          <Route exact path="/all-projects" element=
            {<AllProjects />} />
          <Route exact path="/favourites" element=
            {<Favourites />} />
          <Route path="*" element=
            {<NotFound />} />
        </Routes>
        <Footer />
      </div>

    </div >

  );
}

export default App;
