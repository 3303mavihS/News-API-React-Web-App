import { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const INITITAL_STATE = { darkMode: true };
// useReducer is used to state management
// when there are many states.
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, INITITAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
