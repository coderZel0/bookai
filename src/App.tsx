import { Box, IconButton } from "@mui/material";
import "./App.css";
import PriceSection from "./components/price";
import { useState } from "react";
import { ThemeProvider, useTheme } from "./useTheme";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { LightModeOutlined } from "@mui/icons-material";

function App() {
  const { theme, toggleTheme, themePallete } = useTheme();
  return (
    <div className={`App ${theme === "dark" ? "dark" : ""} relative`}>
      <Box className="w-full">
        <Box
          color={
            theme === "dark"
              ? themePallete.primary.color
              : themePallete.primary.secondaryBackground
          }
          className="w-full flex justify-end absolute right-2 top-2"
        >
          <IconButton color={"inherit"} onClick={toggleTheme}>
            {theme === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
        </Box>
      </Box>
      <Box className="w-full h-full  flex items-center justify-center bg-white dark:bg-[#0f172a]">
        <PriceSection />
      </Box>
    </div>
  );
}

export default App;
