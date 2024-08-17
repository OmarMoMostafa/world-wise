import { useCities } from "../contexts/CitiesContext";

import styles from "./CityNum.module.css";

export default function CityNum() {
  const { cityList } = useCities();
  return (
    <p
      className={styles.cityNum}
    >{`You have visited ${cityList.length} cities`}</p>
  );
}
