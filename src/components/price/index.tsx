import { Box } from "@mui/material";
import Description from "../Description";
import { useTheme } from "../../useTheme";
import BasicTable from "../table";

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
      <Box className="mt-2">
        <BasicTable /* rows={[]} cols={[]} */ />
      </Box>

      <Description
        style={{ container: { mt: 3 }, title: { fontSize: "20px" } }}
        description={
          "On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool."
        }
        title="Token Estimation"
      />
      <Description
        style={{ container: { mt: 3 }, title: { fontSize: "20px" } }}
        description={
          "You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard."
        }
        title="Billing"
      />
    </Box>
  );
};

export default PriceSection;
