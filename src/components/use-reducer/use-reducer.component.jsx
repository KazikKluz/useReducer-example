import React, { useReducer, useEffect, useState } from "react";

import Card from "../../components/card/card.component";

const INITIAL_STATE = {
  usera: null,
  searchQuery: "Bret",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const useReducerExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Bret");
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    if (searchQuery.lenght > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJSON = await response.json();
        setUser(resJSON[0]);
      };
      fetchFunc();
    }
  }, [searchQuery]);
};
