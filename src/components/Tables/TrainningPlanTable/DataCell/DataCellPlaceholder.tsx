import { Typography } from "@mui/material";

export const DataCellPlaceholder = ({ label }: { label?: string }) => {
  return (
    <Typography variant="body2">
      {label && `${label}: `}
      <Typography component="span" sx={{ color: "#aeaeae" }} variant="body2">
        N / A
      </Typography>
    </Typography>
  );
};
