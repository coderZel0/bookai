import { Box } from "@mui/material";
import Description from "../Description";
import { useTheme } from "../../useTheme";

const PriceSection = () => {
  const { theme } = useTheme();
  return (
    <Box className="w-[65%] h-[90%] py-12 px-6 my-6 mx-6 rounded-xl flex-col items-center bg-[#1e293b] border-[0.1px] border-[#334155]">
      <Description
        description={
          "Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:"
        }
        title="API Pricing"
      />
    </Box>
  );
};

export default PriceSection;
