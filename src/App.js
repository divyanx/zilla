import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {

  return (

    < div className="main">
      < Navigation />
      < div className="main-app" >
        < Home />
        <Footer />
      </div>

    </div >

  );
}

export default App;
