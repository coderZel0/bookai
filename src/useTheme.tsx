import React, { useContext, useState, createContext } from "react";

enum Theme {
  Dark = "dark",
  Light = "light",
}

const themePallete = {
  primary: {
    background: "#0f172a",
    secondaryBackground: "#1e293b",
    color: "#6366f1",
    secondaryColor: "#a5b4fc",
    borderColor: "#334155",
    textColor: "#FFFFFF",
  },
};

const ThemeContext = createContext({
  theme: Theme.Dark,
  toggleTheme: () => {},
  themePallete,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  const toggleTheme = () => {
    setTheme((theme) => (theme === Theme.Dark ? Theme.Light : Theme.Dark));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themePallete }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
