import { Box, FormControl, FormGroup, Typography } from "@mui/material";
import { RHFInput } from "./RHFInput";
import type { Control, FieldValues, Path } from "react-hook-form";
import { CustomOnDistanceDataChange } from "../../types";
import { RHFAutocomplete } from "./RHFAutocomplete";
import { runningDistanceOptions } from "../../constants";

type DistanceInputGroupProps<T extends FieldValues> = {
  control: Control<T>;
  displayDistanceOptions?: boolean;
  label: string;
  namePrefix: string;
  onChange?: CustomOnDistanceDataChange;
};

export const DistanceInputGroup = <T extends FieldValues>({
  control,
  displayDistanceOptions = false,
  label,
  namePrefix,
  onChange,
}: DistanceInputGroupProps<T>) => {
  return (
    <FormGroup
      row
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <FormControl>{label}</FormControl>

      <Box display="flex" justifyContent={"end"} sx={{ alignItems: "center" }}>
        {displayDistanceOptions && (
          <>
            <RHFAutocomplete
              control={control}
              options={runningDistanceOptions}
              label="Select distance"
              name={"distanceSelectedValue" as Path<T>}
              onChange={onChange}
            />

            <Typography sx={{ ml: 1.5, mr: 1 }}>or</Typography>
          </>
        )}

        <RHFInput
          adornment="km"
          label="Kilometers"
          name={`${namePrefix}Kilometers` as Path<T>}
          control={control}
          onChange={onChange}
        />

        <RHFInput
          adornment="m"
          label="Meters"
          name={`${namePrefix}Meters` as Path<T>}
          control={control}
          onChange={onChange}
        />
      </Box>
    </FormGroup>
  );
};
