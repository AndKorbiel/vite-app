import { Box, Typography } from "@mui/material";

type TimeInputResultProps = { label: string; value: string };

export const TimeInputResult = ({ label, value }: TimeInputResultProps) => {
  return (
    <Box display="flex" justifyContent={"space-between"}>
      <Typography variant="h5">{label}</Typography>
      <Typography variant="h5">{value}</Typography>
    </Box>
  );
};
