import { Box, Typography } from "@mui/material";

type CalculationResultProps = { label: string; value: string };

export const CalculationResult = ({ label, value }: CalculationResultProps) => {
  return (
    <Box display="flex" justifyContent={"space-between"}>
      <Typography variant="h5">{label}</Typography>
      <Typography variant="h5">{value}</Typography>
    </Box>
  );
};
