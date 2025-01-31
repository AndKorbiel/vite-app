import { Box, TableCell, Typography } from "@mui/material";
import { TrainingUnitDataDetails } from "../../types";

type DataCellProps = {
  data: Partial<TrainingUnitDataDetails> | null;
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

export const DataCell = ({ data }: DataCellProps) => {
  if (!data) return <TableCell>{renderPlaceHolderLabel()}</TableCell>;

  const { distance, pace, pulse, time } = data;

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
    <TableCell>
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
    </TableCell>
  );
};
