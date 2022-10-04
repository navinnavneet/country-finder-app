import { Component } from "react";
import styles from "./CountriesContainer.module.css";
import Inputs from "../Inputs/Inputs";
import Country from "../Country/Country";
import * as utilFunctions from "../../utilities/utilities";
import * as getData from "../../utilities/apiCalls";
import { Audio } from "react-loader-spinner";
import ErrorPage from "../Error/Error";

export default class CountriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      region: "",
      searchName: "",
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    getData
      .getCountries()
      .then((countriesData) => {
        this.setState({
          countries: countriesData,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isLoading: false, error: err });
      });
  }

  handleSearch = (event) => {
    this.setState({ searchName: event.target.value });
  };

  handleRegion = (event) => {
    this.setState({ region: event.target.value });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div className="Loading">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#ccc"
            ariaLabel="loading"
          />
        </div>
      );
    }
    if (this.state.error) {
      return <ErrorPage {...this.state.error} />;
    }
    const regions = utilFunctions.getRegions(this.state.countries);
    let filteredCountries =
      this.state.region !== ""
        ? utilFunctions.filterByRegion(this.state.countries, this.state.region)
        : this.state.countries;

    filteredCountries =
      this.state.searchName !== ""
        ? utilFunctions.filterByCountryName(
            filteredCountries,
            this.state.searchName
          )
        : filteredCountries;
    return (
      <>
        <Inputs
          searchName={this.searchName}
          handleSearch={this.handleSearch}
          regions={regions}
          handleRegion={this.handleRegion}
        />
        <div className={styles.Countries}>
          {filteredCountries.map((country) => (
            <Country key={country.name.official} {...country} />
          ))}
        </div>
      </>
    );
  }
}
