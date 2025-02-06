import { Box, TableCell, Typography } from "@mui/material";

import { useDisplayEditButton } from "../useDisplayEditButton";
import { TrainingUnitDrawerFormData } from "../../../../types/inputsData";
import { generateTableDataMap } from "../../../../utils";
import { DataCellPlaceholder } from "./DataCellPlaceholder";

type DataCellProps = {
  showEditButton?: boolean;
  TrainingData: TrainingUnitDrawerFormData;
};

export const DataCell = ({ showEditButton, TrainingData }: DataCellProps) => {
  const { EditButton, handleMouseEnter, handleMouseLeave } =
    useDisplayEditButton();

  if (!TrainingData.data)
    return (
      <TableCell>
        <DataCellPlaceholder />
      </TableCell>
    );

  const valuesMap = generateTableDataMap(TrainingData.data);

  return (
    <TableCell
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ position: "relative" }}
    >
      {Object.entries(valuesMap).map(([key, { label, value }]) => (
        <Box key={key} sx={{ mt: 0.5, mb: 0.5 }}>
          {value ? (
            <Typography variant="body2">
              {label}:{" "}
              <Typography component="span" fontWeight="bold" variant="body2">
                {value}
              </Typography>
            </Typography>
          ) : (
            <DataCellPlaceholder label={label} />
          )}
        </Box>
      ))}

      {showEditButton && <EditButton TrainingData={TrainingData} />}
    </TableCell>
  );
};
