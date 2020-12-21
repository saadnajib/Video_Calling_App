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
import {routes} from "../src/const/const";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      
        <Switch>
          <Route exact path={routes.INDEX} component={Home} />
          <Route path={routes.REGISTER} component={Register} />
          <Route path={routes.EVENTS} component={Events} />
          <Route path={routes.GALLERY} component={Gallery} />
          <Route path={routes.LOVE} component={Love} />
          <Route path={routes.INFO} component={Info} />
          <Route path={routes.BLOG} component={Blog} />
        </Switch>

         
      </Router>
    </div>
  );
}

export default App;
