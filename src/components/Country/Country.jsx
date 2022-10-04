import { Component } from "react";
import styles from "./Country.module.css";
import { Link } from "react-router-dom";

export default class Country extends Component {
  render() {
    const { name, flags, population, region, capital, cca3 } = this.props;
    return (
      <Link to={`/countries/${cca3}`} className={styles.Country}>
        <img src={flags.svg} alt={`flag of ${name.official}`} />
        <div className={styles.CountryDetails}>
          <h2>{name.official}</h2>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital:{capital} </p>
        </div>
      </Link>
    );
  }
}
