import { Box, FormControl, FormGroup, Typography } from "@mui/material";
import { RHFInput } from "./RHFInput";
import type { Control } from "react-hook-form";
import { PaceInputData } from "../../types";
import { RHFAutocomplete } from "./RHFAutocomplete";
import { runningDistanceOptions } from "../../constants";

type DistanceInputGroupProps = {
  control: Control<PaceInputData>;
  label: string;
  namePrefix: string;
  onChange?: CustomOnDistanceDataChange;
};

export const DistanceInputGroup = ({
  control,
  label,
  namePrefix,
  onChange,
}: DistanceInputGroupProps) => {
  return (
    <FormGroup
      row
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <FormControl>{label}</FormControl>

      <Box display="flex" justifyContent={"end"} sx={{ alignItems: "center" }}>
        <RHFAutocomplete
          control={control}
          options={runningDistanceOptions}
          label="Select distance"
          name="distanceSelectedValue"
          onChange={onChange}
        />

        <Typography sx={{ ml: 1.5, mr: 1 }}>or</Typography>

        <RHFInput
          adornment="km"
          label="Kilometers"
          name={`${namePrefix}Kilometers` as keyof PaceInputData}
          control={control}
          onChange={onChange}
        />

        <RHFInput
          adornment="m"
          label="Meters"
          name={`${namePrefix}Meters` as keyof PaceInputData}
          control={control}
          onChange={onChange}
        />
      </Box>
    </FormGroup>
  );
};
