import { Route, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import University from "./components/University";
import PostalLookup from "./components/PostalLookup";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/home" exact component={Home} />
        <Route path="/university" component={University} />
        <Route path="/postal-lookup" component={PostalLookup} />
        <Redirect to="/home" />
      </Container>
    </div>
  );
};

export default App;
