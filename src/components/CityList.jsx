/* eslint-disable */

import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";
import CityNum from "./CityNum";
export default function CityList() {
  const { isLoading, cityList } = useCities();

  if (isLoading) return <Spinner />;
  if (cityList.length === 0)
    return <Message message="enter the first city by clicking on th map" />;
  return (
    <ul className={styles.cityList}>
      <CityNum />
      {cityList.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
