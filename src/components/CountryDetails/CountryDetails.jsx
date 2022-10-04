import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./CountryDetails.module.css";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import * as getData from "../../utilities/apiCalls";
import { Audio } from "react-loader-spinner";
import ErrorPage from "../Error/Error";

export default class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryDetails: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    const cca3 = this.props.match.params.countryId;

    getData
      .getCountryDetails(cca3)
      .then((countriesData) => {
        this.setState({
          countryDetails: countriesData[0],
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ isLoading: false, error: err });
      });
  }

  componentDidUpdate(prevProps) {
    const cca3 = this.props.match.params.countryId;
    if (prevProps.match.params.countryId !== cca3) {
      getData
        .getCountryDetails(cca3)
        .then((countriesData) => {
          this.setState({
            countryDetails: countriesData[0],
            isLoading: false,
          });
        })
        .catch((err) => {
          this.setState({ isLoading: false, error: err });
        });
    }
  }

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
    const {
      name,
      population,
      flags,
      region,
      subRegion,
      capital,
      tld,
      currencies,
      languages,
      borders,
    } = this.state.countryDetails;
    console.log(borders);
    return (
      <div className={styles.CountryDetails}>
        <Link to="/">
          <button>
            <KeyboardBackspaceSharpIcon />
            <p>Back</p>
          </button>
        </Link>

        <section className={styles.DetailsSection}>
          <div className={styles.Flag}>
            <img src={flags.svg} alt={`flag of ${name.official}`} />
          </div>
          <div className={styles.Details}>
            <h2>{name.official}</h2>
            <div className={styles.Description}>
              <div className={styles.DescriptionLeft}>
                <p>
                  <span>Native Name: </span>
                  {
                    name.nativeName[
                      Object.keys(this.state.countryDetails.name.nativeName)[0]
                    ].official
                  }
                </p>
                <p>
                  <span>Population: </span>
                  {population}
                </p>
                <p>
                  <span>Region: </span>
                  {region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {subRegion}
                </p>
                <p>
                  <span>Capital: </span>
                  {capital}
                </p>
              </div>
              <div className={styles.DescriptionRight}>
                <p>
                  <span>Top Level Domain: </span>
                  {tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {Object.values(currencies)
                    .map((el) => el.name)
                    .join(", ")}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.values(languages).join(", ")}
                </p>
              </div>
            </div>
            <div className={styles.Borders}>
              <p>
                <span>Border Countries: </span>
                <div className={styles.BorderCountries}>
                  {borders.map((border) => (
                    <Link to={border}>
                      <button>
                        <p>{border}</p>
                      </button>
                    </Link>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
