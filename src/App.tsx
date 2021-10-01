import { BrowserRouter, Route } from "react-router-dom";
import Pictures from "./Pictures";
import NewPicture from "./NewPicture";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Pictures} />
      <Route exact path="/new" component={NewPicture} />
    </BrowserRouter>
  );
};

export default App;
