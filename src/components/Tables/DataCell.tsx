import { Box, TableCell, Typography } from "@mui/material";

import { useDisplayEditButton } from "./useDisplayEditButton";
import { TrainingUnitDrawerFormData } from "../../types/inputsData";

type DataCellProps = {
  showEditButton?: boolean;
  TrainingData: TrainingUnitDrawerFormData;
};

const renderPlaceHolderLabel = (label?: string) => (
  <Typography variant="body2">
    {label && `${label}: `}
    <Typography component="span" sx={{ color: "#aeaeae" }} variant="body2">
      N / A
    </Typography>
  </Typography>
);

const getValueOrDefault = (value?: number) => {
  return value === 0 ? "00" : value;
};

export const DataCell = ({ showEditButton, TrainingData }: DataCellProps) => {
  const { EditButton, handleMouseEnter, handleMouseLeave } =
    useDisplayEditButton();

  if (!TrainingData.data)
    return <TableCell>{renderPlaceHolderLabel()}</TableCell>;

  const { distance, pace, pulse, time } = TrainingData.data;

  const timeValue = `${getValueOrDefault(time?.hours)}:${getValueOrDefault(
    time?.minutes
  )}:${getValueOrDefault(time?.seconds)} h`;

  const distanceValue = `${distance?.kilometers} km ${distance?.meters} m`;

  const paceValue = `${pace?.minutes}:${getValueOrDefault(
    pace?.seconds
  )} min / km`;

  const pulseValue = pulse ? `${pulse} bpm` : null;

  const valuesMap = {
    time: { label: "Time", value: timeValue },
    distance: { label: "Distance", value: distanceValue },
    pace: { label: "Pace", value: paceValue },
    pulse: { label: "Pulse", value: pulseValue },
  };

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
            renderPlaceHolderLabel(label)
          )}
        </Box>
      ))}

      {showEditButton && <EditButton TrainingData={TrainingData} />}
    </TableCell>
  );
};
