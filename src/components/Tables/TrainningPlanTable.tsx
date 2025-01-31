import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useGenerateTabledData } from "./useGenerateTableData";
import { useAppSelector } from "../../store/hooks";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const tableHeaders = [
  "Week #",
  "Date",
  "1st training - plan",
  "1st training - result",
  "2nd training - plan",
  "2nd training - result",
  "3rd training - plan",
  "3rd training - result",
];

export const TrainningPlanTable = () => {
  const tableData = useAppSelector((state) => state.trainingData);
  const { renderTableData } = useGenerateTabledData();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: "lightgray" }}>
          <TableRow>
            {tableHeaders.map((header, i) => (
              <TableCell key={i + header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((data) => (
            <StyledTableRow key={data.weekId}>
              {renderTableData(data)}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
