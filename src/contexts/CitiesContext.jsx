/*eslint-disable */
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cityList: [],
  isLoading: false,
  currentCity: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cityList: action.payload };
    case "city/details":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/added":
      return {
        ...state,
        isLoading: false,
        cityList: [...cityList, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cityList: cityList.filter((city) => city.id !== action.payload),
      };

    default:
      break;
  }
};

export function CitiesProvider({ children }) {
  const [{ cityList, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function getCities() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        alert("error in fetching data");
      }
    }
    getCities();
  }, []);

  async function getCity(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/details", payload: data });
    } catch {
      alert("error in fetching data");
    }
  }

  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/added", payload: data });
    } catch {
      alert("error in fetching data");
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      dispatch({ type: "city/deleted", payload: id });
    } catch {
      alert("error in fetching data");
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cityList,
        isLoading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  return useContext(CitiesContext);
}
