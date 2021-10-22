import { BrowserRouter, Route } from "react-router-dom";
import Pictures from "./Pictures";
import NewPicture from "./NewPicture";
import Result from "./Result";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Pictures} />
      <Route exact path="/new/:chain/:order" component={NewPicture} />
      <Route exact path="/result" component={Result} />
    </BrowserRouter>
  );
};

export default App;
