import { Box, FormControl, FormGroup, Typography } from "@mui/material";
import type { Control, FieldValues, Path } from "react-hook-form";

import { RHFAutocomplete } from "./RHFAutocomplete";
import { RHFInput } from "./RHFInput";
import { runningDistanceOptions } from "../../constants";
import { DistanceCalcOnChange } from "../../types/inputsData";

type DistanceInputGroupProps<T extends FieldValues> = {
  control: Control<T>;
  displayDistanceOptions?: boolean;
  label: string;
  namePrefix: string;
  onChange?: DistanceCalcOnChange;
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
          name={`${namePrefix}.kilometers` as Path<T>}
          control={control}
          onChange={onChange}
        />

        <RHFInput
          adornment="m"
          label="Meters"
          name={`${namePrefix}.meters` as Path<T>}
          control={control}
          onChange={onChange}
        />
      </Box>
    </FormGroup>
  );
};
