import { Route, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Universities from "./components/Universities";
import PostalLookup from "./components/PostalLookup";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/home" exact component={Home} />
        <Route path="/universities" component={Universities} />
        <Route path="/postal-lookup" component={PostalLookup} />
        <Redirect to="/home" />
      </Container>
    </div>
  );
};

export default App;
