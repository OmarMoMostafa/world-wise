/* eslint-disable */

import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";
import { useCities } from "../contexts/CitiesContext";
export default function CountryList() {
  const { isLoading, cityList } = useCities();

  if (isLoading) return <Spinner />;

  if (cityList.length === 0)
    return <Message message="enter the first city by clicking on th map" />;

  const countries = cityList.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
