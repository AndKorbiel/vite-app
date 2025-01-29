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
import { TrainingPlanData } from "../../types";
import { TrainingUnitNumber } from "../../constants";
import { useGenerateTabledData } from "./useGenerateTableData";
import { useState } from "react";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const initialTableData: TrainingPlanData[] = [
  {
    date: "12-19.01.2025",
    [TrainingUnitNumber.ONE]: {
      plan: "45 minut - 6:20 tempo - 7.1 km",
      result: "",
    },
    [TrainingUnitNumber.TWO]: { plan: "30 minut - 6:00 - 5 km", result: "" },
    [TrainingUnitNumber.THREE]: { plan: "", result: "" },
    weekId: 1,
  },
  {
    date: "20-26.01.2025",
    [TrainingUnitNumber.ONE]: {
      plan: "50 minut - 6:20 tempo - 7.8 km",
      result: "50 min - 6:10 - 7 km",
    },
    [TrainingUnitNumber.TWO]: { plan: "32 minuty - 6:00 - 5.3 km", result: "" },
    [TrainingUnitNumber.THREE]: { plan: "", result: "" },
    weekId: 2,
  },
  {
    date: "27.01-2.02.2025",
    [TrainingUnitNumber.ONE]: {
      plan: "55 minut - 6:20 tempo - 8.6 km",
      result: "",
    },
    [TrainingUnitNumber.TWO]: { plan: "34 minuty - 6:00 - 5.6 km", result: "" },
    [TrainingUnitNumber.THREE]: { plan: "", result: "" },
    weekId: 3,
  },
  {
    date: "3-9.02.2025",
    [TrainingUnitNumber.ONE]: {
      plan: "60 minut - 6:20 tempo - 9.4 km",
      result: "",
    },
    [TrainingUnitNumber.TWO]: { plan: "35 minut - 6:00 - 5.8 km", result: "" },
    [TrainingUnitNumber.THREE]: { plan: "", result: "" },
    weekId: 4,
  },
];

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
  const [tableData] = useState<TrainingPlanData[]>(initialTableData);

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
