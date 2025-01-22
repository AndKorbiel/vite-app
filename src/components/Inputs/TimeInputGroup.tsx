import { Box, FormControl, FormGroup } from "@mui/material";
import { RHFInput } from "./RHFInput";
import type { Control, FieldValues, Path } from "react-hook-form";

type TimeInputGroupProps<T extends FieldValues> = {
  control: Control<T>;
  displayHoursInput?: boolean;
  label: string;
  namePrefix: string;
};

export const TimeInputGroup = <T extends FieldValues>({
  control,
  displayHoursInput,
  label,
  namePrefix,
}: TimeInputGroupProps<T>) => {
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
            name={`${namePrefix}Hours` as Path<T>}
            control={control}
          />
        )}

        <RHFInput
          adornment="min"
          label="Minutes"
          name={`${namePrefix}Minutes` as Path<T>}
          control={control}
        />

        <RHFInput
          adornment="sec"
          label="Seconds"
          name={`${namePrefix}Seconds` as Path<T>}
          control={control}
        />
      </Box>
    </FormGroup>
  );
};
