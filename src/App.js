import { Route, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import PostalLookup from "./pages/PostalLookup";

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
