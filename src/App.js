import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Love from "./pages/Love";
import Info from "./pages/Info";
import Blog from "./pages/Blog";
import Register from "./pages/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/events" component={Events} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/love" component={Love} />
          <Route path="/info" component={Info} />
          <Route path="/blog" component={Blog} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
