import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MobileDev from "./components/Body/Mobile/MobileDev";
import WebDev from "./components/Body/web/WebButton";
import UI_UX from "./components/Body/UI/UX/UI_UX";
import WebDevs from "./components/dev/WebDevs";
import MobileDevs from "./components/dev/MobileDevs";
import UIUXDevs from "./components/dev/UI/UX";
import DevGuys from "./components/dev/DevGuys";
import AllDev from "./components/dev/AllDev";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mobile" component={MobileDevs} />
        <Route path="/web" component={WebDev} />
        <Route path="/ui" component={UIUXDevs} />
        <Route path="/alldev" component={DevGuys} />
        <Route path="/all" component={AllDev} />
        <Route path="/uiux" component={UI_UX} />
        <Route path="/web_devs" component={WebDevs} />
      </Switch>
    </Router>
  );
}

export default App;
