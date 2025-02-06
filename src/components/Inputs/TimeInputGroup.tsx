import { Box, FormControl, FormGroup } from "@mui/material";
import { RHFInput } from "./RHFInput";
import type { Control, FieldValues, Path } from "react-hook-form";

type TimeInputGroupProps<T extends FieldValues> = {
  control: Control<T>;
  displayHoursInput?: boolean;
  fullWidth?: boolean;
  label: string;
  namePrefix: string;
};

export const TimeInputGroup = <T extends FieldValues>({
  control,
  displayHoursInput,
  fullWidth = false,
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
            name={`${namePrefix}.hours` as Path<T>}
            control={control}
            fullWidth={fullWidth}
          />
        )}

        <RHFInput
          adornment="min"
          label="Minutes"
          name={`${namePrefix}.minutes` as Path<T>}
          control={control}
          fullWidth={fullWidth}
        />

        <RHFInput
          adornment="sec"
          label="Seconds"
          name={`${namePrefix}.seconds` as Path<T>}
          control={control}
          fullWidth={fullWidth}
        />
      </Box>
    </FormGroup>
  );
};
