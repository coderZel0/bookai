import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "../../useTheme";

function createData(api: string, model: string, price: number) {
  return { api, model, price };
}

const rows = [
  createData("OpenAI", "GPT-3.5", 6.0),
  createData("OpenAI", "GPT-4", 9.0),
  createData("Together AI", "Llama-2-70b", 16.0),
  createData("Together AI", "Llama-2-13b", 3.7),
];

export default function BasicTable() {
  const { theme, themePallete } = useTheme();

  const tableHeadCellStyle = { color: "white", fontWeight: 500 };
  const tableRowCellStyle =
    theme === "dark"
      ? { color: themePallete.primary.textColor, fontSize: "16px" }
      : { fontSize: "16px" };

  return (
    <TableContainer
      sx={{
        borderRadius: 2,
        border: 1,
        borderColor: themePallete.primary.borderColor,
      }}
      component={Paper}
    >
      <Table
        sx={{
          minWidth: 650,
          borderCollapse: "collapse",
          borderStyle: "hidden",
          "& td": {
            borderBottom: 1,
            borderColor: themePallete.primary.borderColor,
          },
        }}
        aria-label="simple table"
      >
        <TableHead
          sx={{
            background: themePallete.primary.color,
            border: 0,
          }}
        >
          <TableRow
            sx={{
              border: 0,
              borderBottomColor: themePallete.primary.borderColor,
            }}
          >
            <TableCell sx={tableHeadCellStyle}>API</TableCell>
            <TableCell sx={tableHeadCellStyle}>MODEL</TableCell>
            <TableCell sx={tableHeadCellStyle}>PRICE PER 1K TOKENS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.api}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                background:
                  theme === "dark"
                    ? themePallete.primary.secondaryBackground
                    : "white",
              }}
            >
              <TableCell sx={tableRowCellStyle} scope="row">
                {row.api}
              </TableCell>
              <TableCell sx={tableRowCellStyle}>{row.model}</TableCell>
              <TableCell sx={tableRowCellStyle}>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
