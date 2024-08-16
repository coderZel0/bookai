import React from "react";
import { DescriptonProps } from "./types";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../useTheme";

const Description = (props: DescriptonProps) => {
  const { title, description, style } = props;
  const { themePallete } = useTheme();

  return (
    <Box
      sx={style ? style.container : {}}
      className="w-full p-2 bg-green flex flex-col"
    >
      <Box className="w-full flex justify-start">
        <Typography
          fontSize={"24px"}
          color={themePallete.primary.secondaryColor}
          fontWeight={700}
          sx={style?.title}
        >
          {title}
        </Typography>
      </Box>
      <Box className={`w-full text-[#FFF]`}>
        <p className={`text-left text-[17px] font-[400]`}>
          {description.trim()}
        </p>
      </Box>
    </Box>
  );
};

export default Description;
