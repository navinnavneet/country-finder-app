import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import CountriesContainer from "./components/CountriesContainer/CountriesContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={CountriesContainer} />
          <Route path="/countries/:countryId" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
