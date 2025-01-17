import { Box, FormControl, FormGroup } from "@mui/material";
import { RHFInput } from "./RHFInput";
import type { Control } from "react-hook-form";
import { DistanceInputData } from "../../types";

type TimeInputGroupProps = {
  control: Control<DistanceInputData>;
  displayHoursInput?: boolean;
  label: string;
  namePrefix: string;
};

export const TimeInputGroup = ({
  control,
  displayHoursInput,
  label,
  namePrefix,
}: TimeInputGroupProps) => {
  return (
    <FormGroup
      row
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <FormControl>{label}</FormControl>

      <Box display="flex" justifyContent={"end"}>
        {displayHoursInput && (
          <RHFInput
            adornment="hrs"
            label="Hours"
            name={`${namePrefix}Hours` as keyof DistanceInputData}
            control={control}
          />
        )}

        <RHFInput
          adornment="min"
          label="Minutes"
          name={`${namePrefix}Minutes` as keyof DistanceInputData}
          control={control}
        />

        <RHFInput
          adornment="sec"
          label="Seconds"
          name={`${namePrefix}Seconds` as keyof DistanceInputData}
          control={control}
        />
      </Box>
    </FormGroup>
  );
};
